/* eslint-disable no-unused-vars */
import React from "react";
import { withTheme } from "styled-components";
import { AppContext } from "../../../contexts/app-context";

import IPage from "../../../interfaces/page";

import CustomButton from "../../atoms/custom-button";

const HomePage: React.FC<IPage | any> = ({ theme }) => {
  const { switchTheme } = React.useContext<any>(AppContext);

  const handleChangeTheme = (): void => {
    switchTheme();
  };

  return (
    <div>
      <CustomButton onClick={handleChangeTheme}>
        Current theme: {theme.current} (click to switch)
      </CustomButton>
    </div>
  );
};

export default withTheme(HomePage);
