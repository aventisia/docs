import nextra from "nextra";

const withNextra = nextra({
  // contentDirBasePath: The base path for your content directory. As per nextra docs, if folder name is "content", you can omit this but getting error if not provided.
  contentDirBasePath: "/", 
  defaultShowCopyCode: true,
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
});
