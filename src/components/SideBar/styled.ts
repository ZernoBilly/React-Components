import styled from "styled-components";

interface SideBarContainerProps {
  bgImage: string;
  bgColor: string;
}

interface SideBarHeaderProps {
  spacingTop?: string;
  headerColor?: string;
  headerFontFamily?: string;
}

type SideBarProps = SideBarContainerProps | SideBarHeaderProps;

export const SideBarContainer = styled.div<SideBarContainerProps>`
  width: 20%;
  max-width: 20rem;
  min-width: 5rem;

  background-image: linear-gradient(
      315deg,
      rgba(0, 0, 0, 0.1) 0%,
      ${(props) => props.bgColor} 74%
    ),
    url(${(props) => props.bgImage});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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
