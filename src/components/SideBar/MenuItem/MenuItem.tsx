import React from "react";
import { Link } from "react-router-dom";

import SubMenuItem from "./SubMenuItem/SubMenuItem";

import {
  SingleItemContainer,
  SingleMenuItem,
  MenuItemText,
  MenuItemIcon,
  SubMenuButton,
} from "./styled";

interface ISubMenuItem {
  name: string;
  to: string;
}

type MenuItemProps<T> = {
  menuItem: T;
  menuItemFontFamily?: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  dividerColor: string;
  menuItemColor: string;
  selectedMenuItemColor: string;
  onHoverColor: string;
  sideMenuOpen: boolean;
  subMenuItems?: ISubMenuItem[] | undefined;
  subMenuOpen: boolean;
  setSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuItem = <
  T extends {
    name: string;
    icon: string;
    to: string;
  }
>({
  menuItem,
  menuItemFontFamily,
  selected,
  setSelected,
  dividerColor,
  menuItemColor,
  selectedMenuItemColor,
  onHoverColor,
  sideMenuOpen,
  subMenuItems = [],
  subMenuOpen,
  setSubMenuOpen,
}: MenuItemProps<T>) => {
  const isSelected = selected === menuItem.name;
  const hasSubMenuItems = !!subMenuItems.length;

  const menuItemClickHandler = () => {
    setSelected(menuItem.name);

    hasSubMenuItems ? setSubMenuOpen(!subMenuOpen) : setSubMenuOpen(false);
  };

  return (
    <SingleItemContainer>
      <Link to={menuItem.to} replace style={{ textDecoration: "none" }}>
        <SingleMenuItem
          onClick={() => menuItemClickHandler()}
          dividerColor={dividerColor}
          isSelected={isSelected}
          selectedMenuItemColor={selectedMenuItemColor}
          onHoverColor={onHoverColor}
        >
          <MenuItemIcon src={menuItem.icon} sideMenuOpen={sideMenuOpen} />
          {sideMenuOpen && (
            <MenuItemText
              menuItemFontFamily={menuItemFontFamily}
              menuItemColor={menuItemColor}
              isSelected={isSelected}
              selectedMenuItemColor={selectedMenuItemColor}
              onHoverColor={onHoverColor}
            >
              {menuItem.name}
            </MenuItemText>
          )}

          {hasSubMenuItems && sideMenuOpen && (
            <SubMenuButton
              subMenuButtonColor={menuItemColor}
              isSelected={isSelected}
              selectedMenuItemColor={selectedMenuItemColor}
              subMenuOpen={subMenuOpen}
            ></SubMenuButton>
          )}
        </SingleMenuItem>

        {hasSubMenuItems &&
          sideMenuOpen &&
          subMenuOpen &&
          subMenuItems.map((item) => (
            <SubMenuItem<ISubMenuItem>
              subMenuItem={item}
              menuItemColor={menuItemColor}
              onHoverColor={onHoverColor}
            />
          ))}
      </Link>
    </SingleItemContainer>
  );
};

export default MenuItem;
