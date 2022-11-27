import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: string;
  onClick?: () => void;
};

const Navbar: React.FC<Props> = ({ href, children, onClick }) => {
  return (
    <span className="inline-block w-full">
      <Link onClick={onClick} className="inline-block w-full" href={href}>
        {children}
      </Link>
    </span>
  );
};

export default Navbar;
