import React, { useContext } from "react";
import { AppContext } from "../../../contexts/app-context";

import CustomButton from "../../atoms/custom-button";
import { Navbar, Menu } from "./fixed-component.styles";

const FixedComponent: React.FC<any> = () => {
  const { switchTheme } = useContext<any>(AppContext);

  return (
    <Navbar>
      <Menu>
        <CustomButton onClick={switchTheme}>Switch Theme</CustomButton>
      </Menu>
    </Navbar>
  );
};

export default FixedComponent;
