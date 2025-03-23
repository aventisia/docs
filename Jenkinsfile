// Define a function to get the target server based on the branch name
def getTargetServer(branchName) {
    switch(branchName) {
        case 'dev':
            return 'avdev.aventisia.com'
        case 'uat':
            return 'avuat.aventisia.com'
        case 'main':
            return 'avweb.aventisia.com'
        default:
            error "Unsupported branch: ${branchName}"
    }
}

pipeline {
    agent any
    tools {
        nodejs 'NodeJS 20.18.1'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                script {
                    sh "npm run build && npx pagefind --site dist"
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sshagent(credentials: ['aventisia_vps_ssh']) {
                        // Set target server based on branch
                        def targetServer = getTargetServer(env.BRANCH_NAME)

                        echo "Deploying to ${targetServer}..."
                        
                        // Deploy to target server  
                        sh "rsync -avz --delete ${WORKSPACE}/dist/* admin@${targetServer}:/var/www/aventisia.com/clients/docs/"
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'Cleaning up...'
            deleteDir()
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}