import React from "react";

import { ToggleButtonContainer } from "./styled";

type ToggleButtonProps = {
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleButtonColor: string;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  sideMenuOpen,
  setSideMenuOpen,
  toggleButtonColor,
}) => {
  const handleToggleButtonClick = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <ToggleButtonContainer
      onClick={() => handleToggleButtonClick()}
      toggleButtonColor={toggleButtonColor}
      sideMenuOpen={sideMenuOpen}
    ></ToggleButtonContainer>
  );
};

export default ToggleButton;
