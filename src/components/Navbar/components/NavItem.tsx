import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: string;
};

const Navbar: React.FC<Props> = ({ href, children }) => {
  return (
    <span>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </span>
  );
};

export default Navbar;