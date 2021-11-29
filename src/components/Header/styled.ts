import styled from "styled-components";

type HeaderProps = {
  color: string;
  fontFamily: string;
};

export const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 1rem;
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily && props.fontFamily};
  }

  h2 {
    margin: 1rem;
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily && props.fontFamily};
  }

  h3 {
    margin: 1rem;
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily && props.fontFamily};
  }

  p {
    margin: 0;
    padding: 0;
  }
`;
