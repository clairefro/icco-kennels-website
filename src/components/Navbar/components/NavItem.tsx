import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: string;
};

const Navbar: React.FC<Props> = ({ href, children }) => {
  return (
    <span className="inline-block w-full">
      <Link className="inline-block w-full" href={href}>
        {children}
      </Link>
    </span>
  );
};

export default Navbar;
