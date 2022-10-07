import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import NavItem from "./NavItem";

type MenuItemT = {
  title: string;
  href: string;
};

type Props = {
  menuItems: MenuItemT[];
  children: string;
};

const SubmenuNav: React.FC<Props> = ({ menuItems, children }) => {
  return (
    <Menu
      menuClassName="icco-menu"
      menuButton={<MenuButton>{children}</MenuButton>}
      transition
    >
      <div className="flex flex-col gap-2 my-2">
        {menuItems.map(({ href, title }, i) => (
          <MenuItem className="icco-menu-item" key={i}>
            <NavItem href={href}>{title}</NavItem>
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
};

export default SubmenuNav;
