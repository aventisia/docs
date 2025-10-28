import { Navbar } from "nextra-theme-docs";
import { AppLogo } from "./AppLogo";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar className="parent-nav" logo={<AppLogo />}>
      <Link href="/library">
        <span className="nx-mx-4 text-secondary nx-font-medium hover:text-primary hover:underline">Library</span>
      </Link>
      <Link href="https://aventisia.com/">
        <span className="nx-mx-4 text-secondary nx-font-medium hover:text-primary hover:underline">Website</span>
      </Link>
    </Navbar>
  );
}
