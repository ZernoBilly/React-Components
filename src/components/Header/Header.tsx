import React from "react";

import { HeaderContainer } from "./styled";

type HeaderProps = {
  children: string;
  variant?: "h1" | "h2" | "h3";
  color?: string;
  description?: string;
  fontFamily?: string;
};

const Header: React.FC<HeaderProps> = ({
  variant = "h1",
  children,
  color = "",
  description,
  fontFamily = "",
}) => {
  return (
    <HeaderContainer color={color} fontFamily={fontFamily}>
      {(variant === "h1" && <h1>{children}</h1>) ||
        (variant === "h2" && <h2>{children}</h2>) ||
        (variant === "h3" && <h3>{children}</h3>)}
      {description && <p>{description}</p>}
    </HeaderContainer>
  );
};

export default Header;
