import React from "react";

import SubMenuItem from "./SubMenuItem/SubMenuItem";

import {
  SingleMenuItem,
  MenuItemText,
  MenuItemIcon,
  SubMenuButton,
} from "./styled";

interface MenuItemProps<T> {
  menuItem: T;
  menuItemFontFamily?: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  dividerColor: string;
  menuItemColor: string;
  selectedMenuItemColor: string;
  onHoverColor: string;
  sideMenuOpen: boolean;
  subMenuItems?: { name: string; to: string }[] | undefined;
}

const MenuItem = <
  T extends {
    name: string;
    icon: string;
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
}: MenuItemProps<T>) => {
  const isSelected = selected === menuItem.name;
  const hasSubMenuItems = !!subMenuItems.length;

  const onClickHandler = () => {
    setSelected(menuItem.name);
  };

  return (
    <SingleMenuItem
      onClick={() => onClickHandler()}
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
      {hasSubMenuItems && <SubMenuButton></SubMenuButton>}
    </SingleMenuItem>
  );
};

export default MenuItem;
