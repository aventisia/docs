import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  index: {
    title: "Getting Started",
    theme: {
      breadcrumb: false,
    },
  },
  "#": {
    type: "separator",
  },
  // Navbar links
  website_link: {
    title: "Website",
    type: "page",
    href: "https://aventisia.com",
  },
  login_link: {
    title: "Login",
    type: "page",
    href: "https://accounts.aventisia.com/login",
  },
};

export default meta;
