import React from "react";

import { HomeContainer } from "./styled";
import SideBar from "../../components/SideBar/SideBar";

import {
  backgroundImage,
  headerText,
  menuItems,
  fonts,
  colors,
} from "../../testData/testData";

const Home = () => {
  return (
    <HomeContainer>
      <SideBar
        bgImage={backgroundImage}
        headerText={headerText}
        headerFontFamily={fonts[1]}
        menuItems={menuItems}
        menuItemFontFamily={fonts[2]}
        colors={colors}
      />
    </HomeContainer>
  );
};

export default Home;
