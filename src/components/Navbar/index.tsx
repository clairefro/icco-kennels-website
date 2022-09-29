import Link from "next/link";
import React from "react";
import NavItem from "./components/NavItem";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-500 flex justify-between p-4">
      <Link href="/">LOGO</Link>
      <div>
        <NavItem href="/contact">Contact Us</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
