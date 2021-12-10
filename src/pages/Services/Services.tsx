import React from "react";

import Card from "../../components/Card/Card";

import { cardImage, cardDecorations } from "../../testData/CardTestData";

const Services = () => {
  return (
    <>
      <p>Services</p>
      <Card
        cardImage={cardImage}
        elevation={cardDecorations.elevation}
        rounded={cardDecorations.rounded}
      />
    </>
  );
};

export default Services;
