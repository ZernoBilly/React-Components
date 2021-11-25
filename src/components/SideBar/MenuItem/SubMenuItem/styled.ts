import styled from "styled-components";

type SubMenuItemTextProps = {
  menuItemColor: string;
  onHoverColor: string;
};

export const SubMenuItemContainer = styled.div`
  margin: 0;
  padding: 0 0 0 15%;
`;

export const SubMenuItemText = styled.p<SubMenuItemTextProps>`
  color: ${(props) => props.menuItemColor};
  margin: 0;
  padding: 0.3rem 0;
  font-weight: 550;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.onHoverColor};
    transition: 0.1s ease-in-out all;
  }
`;
