import styled from "styled-components";

type SingleMenuItemProps = {
  dividerColor: string;
  isSelected: boolean;
  selectedMenuItemColor: string;
  onHoverColor: string;
};

type MenuItemTextProps = {
  menuItemFontFamily?: string;
  menuItemColor: string;
  isSelected: boolean;
  selectedMenuItemColor: string;
  onHoverColor: string;
};

type MenuItemIconProps = {
  sideMenuOpen: boolean;
};

type SubMenuButtonProps = {
  subMenuButtonColor: string;
  isSelected: boolean;
  selectedMenuItemColor: string;
  subMenuOpen: boolean;
};

export const SingleItemContainer = styled.div``;

export const SingleMenuItem = styled.div<SingleMenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem 1rem;
  position: relative;
  cursor: pointer;
  overflow: initial;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      border: 1px solid;
      border-color: ${(props) =>
        props.isSelected ? props.selectedMenuItemColor : props.onHoverColor};
      bottom: 0;
      transition: 0.2s ease-in-out all;
    }
  }

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    border: 1px solid;
    border-color: ${(props) =>
      props.isSelected ? props.selectedMenuItemColor : props.dividerColor};
    bottom: 0;
    transition: 0.2s ease-in-out all;
  }
`;

export const MenuItemText = styled.p<MenuItemTextProps>`
  display: flex;
  padding: 1rem 0rem 1rem 2rem;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 550;
  font-family: ${(props) => props.menuItemFontFamily};
  color: ${(props) =>
    props.isSelected ? props.selectedMenuItemColor : props.menuItemColor};
  width: 100%;
  height: 100%;
  transition: 0.2s ease-in-out all;

  &:hover {
    color: ${(props) => !props.isSelected && props.onHoverColor};
    transition: 0.1s ease-in all;
  }
`;

export const MenuItemIcon = styled.img<MenuItemIconProps>`
  padding: ${(props) => (!props.sideMenuOpen ? "0.8rem 0rem" : "0rem")};
  height: 2rem;
`;

export const SubMenuButton = styled.div<SubMenuButtonProps>`
  position: absolute;
  right: 1rem;
  height: 0.4rem;
  width: 0.4rem;
  border: solid
    ${(props) =>
      props.isSelected
        ? props.selectedMenuItemColor
        : props.subMenuButtonColor};
  border-width: 0 2px 2px 0;
  transform: ${(props) =>
    props.subMenuOpen ? "rotate(-135deg)" : "rotate(45deg)"};
  transition: 0.1s ease-in-out color;
`;
