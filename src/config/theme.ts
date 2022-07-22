/* eslint-disable no-unused-vars */
import { ThemeProps, ThemeSchemes } from "../interfaces/theme";

/**
 * Theme config:
 * The definitions of the 'theme'
 * object will be considered as
 * the default version for the theme.
 */
const theme: ThemeProps = {
  current: ThemeSchemes.Light,
  colors: {
    light: {
      primary: "green",
    },
    dark: {
      primary: "red",
    },
  },
};

export default theme;
