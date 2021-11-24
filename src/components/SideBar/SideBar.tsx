import React, { useState } from "react";

import MenuItem from "./MenuItem/MenuItem";

import { SideBarContainer, SideBarHeader, MenuItemsContainer } from "./styled";

interface IMenuItem {
  name: string;
  to: string;
  icon: string;
  subMenuItems?: { name: string; to: string }[];
}

interface ColorsProps {
  background: string;
  header: string;
  menuItem: string;
  selectedMenuItem: string;
  itemOnHover: string;
}

type SideBarProps = {
  bgImage: string;
  headerText: string;
  headerFontFamily?: string;
  iconsColor?: string;
  menuItemFontFamily?: string;
  menuItems: IMenuItem[];
  colors: ColorsProps;
};

const SideBar: React.FC<SideBarProps> = ({
  bgImage = "",
  headerText = "",
  headerFontFamily = "",
  menuItemFontFamily = "",
  menuItems = [],
  colors,
}) => {
  const [selected, setSelected] = useState(menuItems[0].name);

  return (
    <SideBarContainer bgImage={bgImage} bgColor={colors.background}>
      <SideBarHeader
        headerColor={colors.header}
        headerFontFamily={headerFontFamily}
      >
        {headerText}
      </SideBarHeader>
      <MenuItemsContainer>
        {menuItems.map((item: IMenuItem) => (
          <MenuItem<IMenuItem>
            key={item.name}
            menuItem={item}
            menuItemFontFamily={menuItemFontFamily}
            selected={selected}
            setSelected={setSelected}
            dividerColor={colors.background}
            menuItemColor={colors.menuItem}
            selectedMenuItemColor={colors.selectedMenuItem}
            itemOnHoverColor={colors.itemOnHover}
          />
        ))}
      </MenuItemsContainer>
    </SideBarContainer>
  );
};

export default SideBar;
