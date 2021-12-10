import styled from "styled-components";

type CardContainerProps = {
  elevation: boolean;
  rounded: boolean;
};

export const CardContainer = styled.div<CardContainerProps>`
  margin: 0.5rem;
  width: 20rem;
  box-shadow: ${(props) =>
    props.elevation ? "0 4px 8px 0 rgba(0, 0, 0, 0.6)" : "none"};
  transition: 0.2s linear;
  animation: ease-in;
  overflow: hidden;
  border-radius: ${(props) => (props.rounded ? "6px" : "none")};

  &:hover {
    transform: scale(1.01);
    box-shadow: ${(props) =>
      props.elevation ? "0 8px 16px 0 rgba(0, 0, 0, 0.6)" : "none"};
  }
`;

export const CardImageContainer = styled.div`
  height: 20rem;
  overflow: hidden;

  img {
  }
`;

export const CardTitleContainer = styled.div`
  margin: 0 0.5rem 0 0.5rem;
  padding-top: 0.5rem;
  text-align: left;
  h3 {
  }
`;

export const CardBodyContainer = styled.div`
  margin: 0 0.5rem 0 0.5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  p {
  }
`;

export const CardButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 0.5rem;
`;

export const CardButton = styled.button`
  margin: 0 0.2rem 0 0.2rem;
  height: 2rem;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  border: none;
`;
