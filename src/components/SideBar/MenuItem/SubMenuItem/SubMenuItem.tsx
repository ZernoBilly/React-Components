import React from "react";

import { SubMenuItemContainer, SubMenuItemText } from "./styled";

type SubMenuItemProps<T> = {
  subMenuItem: T;
  menuItemColor: string;
  onHoverColor: string;
};

const SubMenuItem = <T extends { name: string; to: string }>({
  subMenuItem,
  menuItemColor,
  onHoverColor,
}: SubMenuItemProps<T>) => {
  return (
    <SubMenuItemContainer>
      <SubMenuItemText
        menuItemColor={menuItemColor}
        onHoverColor={onHoverColor}
      >
        {subMenuItem.name}
      </SubMenuItemText>
    </SubMenuItemContainer>
  );
};

export default SubMenuItem;
