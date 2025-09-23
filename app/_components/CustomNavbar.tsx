import { Navbar } from "nextra-theme-docs";
import { AppLogo } from "./AppLogo";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar logo={<AppLogo />}>
      <Link href="/library">
        <span className="nx-mx-4 nx-font-medium">Library</span>
      </Link>
    </Navbar>
  );
}
