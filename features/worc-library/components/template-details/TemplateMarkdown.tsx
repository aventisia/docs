interface Props {
  content: string;
}

import { compileMdx } from "nextra/compile";
import { MDXRemote } from "nextra/mdx-remote";
import { useMDXComponents } from "@/mdx-components";

async function MDXContent({ content }: { content: string }) {
  return (
    <div className="mdx-content">
      <MDXRemote
        components={useMDXComponents()}
        compiledSource={await compileMdx(content)}
      />
    </div>
  );
}

export default function TemplateMarkdown({ content }: Props) {
  return <MDXContent content={content} />;
}
