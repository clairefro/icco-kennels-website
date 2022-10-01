import Link from "next/link";
import React from "react";
import ButtonSecondary from "../blocks/buttons/ButtonSecondary";
import Hamburger from "./components/Hamburger";
import NavItem from "./components/NavItem";
import SubmenuNav from "./components/SubmenuNav";

const dogMenuItems = [
  { href: "/puppies-available", title: "Puppies available" },
  { href: "/studs-available", title: "Studs available" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent fixed w-screen">
      <div className="relative">
        <div className="z-50 flex justify-between p-4 w-full absolute">
          <Link href="/">LOGO</Link>
          <div>
            <div className=" gap-6 items-center hidden sm:flex">
              <SubmenuNav menuItems={dogMenuItems}>Dogs</SubmenuNav>
              <NavItem href="/policy">Policy</NavItem>
              <ButtonSecondary className="whitespace-nowrap">
                <NavItem href="/contact">Contact Us</NavItem>
              </ButtonSecondary>
            </div>
            <Hamburger />
          </div>
        </div>
        <div className="h-20 top-0 absolute w-full bg-gradient-to-b from-icco-darkest/100 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;
