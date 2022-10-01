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
    href: "/policy",
    title: "Policy",
  },
];
const Hamburger: React.FC = () => {
  return (
    <Menu>
      {navLinks.map(({ href, title }, i) => (
        <NavItem key={i} href={href}>
          {title}
        </NavItem>
      ))}

      <ButtonSecondary>
        <NavItem href="/contact">Contact Us</NavItem>
      </ButtonSecondary>
    </Menu>
  );
};

export default Hamburger;
