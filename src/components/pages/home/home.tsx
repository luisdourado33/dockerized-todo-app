/* eslint-disable no-unused-vars */
import React from "react";
import IPage from "../../../interfaces/page";

import CustomButton from "../../atoms/custom-button";

const HomePage: React.FC<IPage> = () => {
  return (
    <div>
      <CustomButton>Hello World!</CustomButton>
    </div>
  );
};

export default HomePage;
