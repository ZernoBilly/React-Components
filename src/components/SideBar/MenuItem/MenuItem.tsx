import React, { useState } from "react";

import { SingleMenuItem, MenuItemText, MenuItemIcon } from "./styled";

interface MenuItemProps<T> {
  menuItem: T;
  menuItemFontFamily?: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  dividerColor: string;
  menuItemColor: string;
  selectedMenuItemColor: string;
  itemOnHoverColor: string;
}

const MenuItem = <T extends { name: string; icon: string }>({
  menuItem,
  menuItemFontFamily,
  selected,
  setSelected,
  dividerColor,
  menuItemColor,
  selectedMenuItemColor,
  itemOnHoverColor,
}: MenuItemProps<T>) => {
  const isSelected = selected === menuItem.name;

  return (
    <SingleMenuItem
      onClick={() => setSelected(menuItem.name)}
      dividerColor={dividerColor}
      isSelected={isSelected}
      selectedMenuItemColor={selectedMenuItemColor}
      itemOnHoverColor={itemOnHoverColor}
    >
      <MenuItemIcon src={menuItem.icon} />
      <MenuItemText
        menuItemFontFamily={menuItemFontFamily}
        menuItemColor={menuItemColor}
        isSelected={isSelected}
        selectedMenuItemColor={selectedMenuItemColor}
      >
        {menuItem.name}
      </MenuItemText>
    </SingleMenuItem>
  );
};

export default MenuItem;
