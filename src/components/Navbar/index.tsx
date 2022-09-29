import Link from "next/link";
import React from "react";
import NavItem from "./components/NavItem";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent fixed w-screen">
      <div className="relative">
        <div className="z-50 flex justify-between p-4 w-full absolute">
          <Link href="/">LOGO</Link>
          <div>
            <NavItem href="/contact">Contact Us</NavItem>
          </div>
        </div>
        <div className="h-16 top-0 absolute w-full bg-gradient-to-b from-icco-darkest/100 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;
