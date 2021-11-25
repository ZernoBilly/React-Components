import React, { useState, useEffect } from "react";

import MenuItem from "./MenuItem/MenuItem";
import ToggleButton from "./ToggleButton/ToggleButton";

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
  onHover: string;
  toggleButton: string;
}

type SideBarProps = {
  spacingTop?: string;
  bgImage: string;
  headerText: {
    long: string;
    short: string;
  };
  headerFontFamily?: string;
  iconsColor?: string;
  menuItemFontFamily?: string;
  menuItems: IMenuItem[];
  colors: ColorsProps;
};

const SideBar: React.FC<SideBarProps> = ({
  spacingTop = "",
  bgImage = "",
  headerText = {},
  headerFontFamily = "",
  menuItemFontFamily = "",
  menuItems = [],
  colors,
}) => {
  const [selected, setSelected] = useState(menuItems[0].name);
  const [sideMenuOpen, setSideMenuOpen] = useState(true);
  const [showHeaderText, setShowHeaderText] = useState(headerText.long);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  //Delay for long header text appearing
  useEffect(() => {
    sideMenuOpen
      ? setTimeout(() => {
          setShowHeaderText(headerText.long);
        }, 180)
      : setShowHeaderText(headerText.short);
  }, [setShowHeaderText, headerText.long, headerText.short, sideMenuOpen]);

  //Window width listener for opening and closing SideMenu
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1080) {
        setSideMenuOpen(false);
      } else {
        setSideMenuOpen(true);
      }
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return (
    <SideBarContainer
      bgImage={bgImage}
      bgColor={colors.background}
      sideMenuOpen={sideMenuOpen}
    >
      <SideBarHeader
        headerColor={colors.header}
        headerFontFamily={headerFontFamily}
        spacingTop={spacingTop}
      >
        {showHeaderText}
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
            onHoverColor={colors.onHover}
            sideMenuOpen={sideMenuOpen}
            subMenuItems={item.subMenuItems}
            subMenuOpen={subMenuOpen}
            setSubMenuOpen={setSubMenuOpen}
          />
        ))}
      </MenuItemsContainer>
      <ToggleButton
        sideMenuOpen={sideMenuOpen}
        setSideMenuOpen={setSideMenuOpen}
        toggleButtonColor={colors.toggleButton}
      />
    </SideBarContainer>
  );
};

export default SideBar;
