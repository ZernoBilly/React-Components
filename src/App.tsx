import React from "react";

import { MainContainer } from "./styled";

import SideBar from "./components/SideBar/SideBar";
import MainSection from "./components/MainSection/MainSection";

import {
  backgroundImage,
  headerText,
  menuItems,
  fonts,
  colors,
} from "./testData/SideMenuTestData";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <SideBar
          bgImage={backgroundImage}
          headerText={headerText}
          headerFontFamily={fonts[1]}
          menuItems={menuItems}
          menuItemFontFamily={fonts[2]}
          colors={colors}
        />
        <MainSection />
      </MainContainer>
    </div>
  );
}

export default App;
