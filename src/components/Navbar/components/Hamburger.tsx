import { useState } from "react";
import { push as Menu } from "react-burger-menu";
import ButtonSecondary from "../../blocks/buttons/ButtonSecondary";
import NavItem from "./NavItem";

const navLinks = [
  {
    href: "/puppies-available",
    title: "Puppies available",
  },
  {
    href: "/studs-available",
    title: "Studs available",
  },
  {
    href: "/gallery",
    title: "Gallery",
  },
  {
    href: "/policy",
    title: "Policy",
  },
];
const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStateChange = (e: { isOpen: boolean }) => {
    setIsOpen(e.isOpen);
  };

  return (
    <Menu onStateChange={handleStateChange} isOpen={isOpen}>
      {navLinks.map(({ href, title }, i) => (
        <NavItem onClick={() => setIsOpen(false)} key={i} href={href}>
          {title}
        </NavItem>
      ))}

      <ButtonSecondary onClick={() => setIsOpen(false)}>
        <NavItem href="/contact">Contact Us</NavItem>
      </ButtonSecondary>
    </Menu>
  );
};

export default Hamburger;
