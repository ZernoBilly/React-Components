import styled from "styled-components";

type ToggleButtonContainerProps = {
  toggleButtonColor: string;
  sideMenuOpen: boolean;
};

export const ToggleButtonContainer = styled.div<ToggleButtonContainerProps>`
  position: absolute; //absolute to SideBarContainer
  width: 30%;
  height: 2rem;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
  transform: ${(props) => !props.sideMenuOpen && "rotate(90deg)"};
  transition: 0.3s ease-in-out all;

  @media only screen and (max-width: 780px) {
    max-width: ${(props) => props.sideMenuOpen && "20%"};
  }

  &:after {
    content: "";
    position: absolute; // absolute to ToggleButtonContainer
    left: 0%;
    top: 0.25rem;
    height: 3px;
    width: 100%;
    background: ${(props) => props.toggleButtonColor};
    box-shadow: 0 0.75rem 0 0 ${(props) => props.toggleButtonColor},
      0 1.5rem 0 0 ${(props) => props.toggleButtonColor};
  }
`;
