import styled from "styled-components";

type SideBarContainerProps = {
  bgImage: string;
  bgColor: string;
  sideMenuOpen: boolean;
};

type SideBarHeaderProps = {
  spacingTop?: string;
  headerColor?: string;
  headerFontFamily?: string;
};

export const SideBarContainer = styled.div<SideBarContainerProps>`
  position: relative;
  width: ${(props) => (props.sideMenuOpen ? "30%" : "5%")};
  max-width: 20rem;
  min-width: 5rem;
  transition: 0.2s ease-in all;
  background-image: linear-gradient(
      315deg,
      rgba(0, 0, 0, 0.1) 0%,
      ${(props) => props.bgColor} 74%
    ),
    url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media only screen and (max-width: 700px) {
    width: ${(props) => (props.sideMenuOpen ? "100%" : "5%")};
    max-width: 100vw;
  }
`;

export const SideBarHeader = styled.h3<SideBarHeaderProps>`
  text-align: center;
  padding-top: ${(props) => (props.spacingTop ? props.spacingTop : "1rem")};
  color: ${(props) => (props.headerColor ? props.headerColor : " white")};
  font-family: ${(props) => props.headerFontFamily};
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;

export const MenuItemsContainer = styled.div``;
