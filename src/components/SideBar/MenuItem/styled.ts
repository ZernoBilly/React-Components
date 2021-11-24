import styled from "styled-components";

type SingleMenuItemProps = {
  dividerColor: string;
  isSelected: boolean;
  selectedMenuItemColor: string;
  itemOnHoverColor: string;
};

type MenuItemTextProps = {
  menuItemFontFamily?: string;
  menuItemColor: string;
  isSelected: boolean;
  selectedMenuItemColor: string;
};

export const SingleMenuItem = styled.div<SingleMenuItemProps>`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.2rem 1rem;
  position: relative;
  cursor: pointer;

  &:hover {
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      border: 1px solid;
      border-color: ${(props) =>
        props.isSelected
          ? props.selectedMenuItemColor
          : props.itemOnHoverColor};
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
  color: ${(props) => props.menuItemColor};
  width: 100%;
  height: 100%;

  &:hover {
    color: ${(props) => props.selectedMenuItemColor};
    transition: 0.1s ease-in all;
  }
`;

export const MenuItemIcon = styled.img`
  height: 2rem;
`;
