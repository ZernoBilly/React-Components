import React from "react";

import {
  CardContainer,
  CardImageContainer,
  CardTitleContainer,
  CardBodyContainer,
  CardButtonContainer,
  CardButton,
} from "./styled";

type CardProps = {
  cardImage: string;
  elevation?: boolean;
  rounded?: boolean;
};

const Card: React.FC<CardProps> = ({
  cardImage,
  elevation = true,
  rounded = false,
}) => {
  return (
    <CardContainer elevation={elevation} rounded={rounded}>
      <CardImageContainer>
        <img src={cardImage} />
      </CardImageContainer>
      <CardTitleContainer>
        <h3>Title</h3>
      </CardTitleContainer>
      <CardBodyContainer>
        <p>CardBody</p>
      </CardBodyContainer>
      <CardButtonContainer>
        <CardButton>viewv</CardButton>
        <CardButton>view</CardButton>
      </CardButtonContainer>
    </CardContainer>
  );
};

export default Card;
