import React from "react";
import { ThemeProvider as Provider } from "styled-components";

import theme from "./styles";

const ThemeProvider: React.FC<any> = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
