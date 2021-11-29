import React from "react";

import Header from "../../components/Header/Header";

import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <Header variant={"h1"} description={"halaooao"}>
        Home
      </Header>
    </HomeContainer>
  );
};

export default Home;
