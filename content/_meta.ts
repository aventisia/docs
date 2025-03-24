import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  index: {
    title: "Getting Started",
    theme: {
      breadcrumb: false,
    },
  },
  "page-2": {
    title: "Page 2",
    theme: {
      breadcrumb: false,
    },
  },
  "page-3": {
    title: "Page 3",
    theme: {
      breadcrumb: false,
    },
  },
  "#": {
    type: "separator",
  },
  "page-group-1": {
    title: "Page Group 1",
    theme: {
      breadcrumb: false,
    },
  },
  "##": {
    type: "separator",
  },
  "page-group-2": {
    title: "Page Group 2",
    theme: {
      breadcrumb: false,
    },
  },
  "file": {
    title: "File",
    theme: {
      breadcrumb: false,
    },
  },
  "conditional": {
    title: "Conditional",
    theme: {
      breadcrumb: false,
    },
  },
  "datatable": {
    title: "Data Table",
    theme: {
      breadcrumb: false,
    },
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
