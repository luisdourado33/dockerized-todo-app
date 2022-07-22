/* eslint-disable no-unused-vars */
import { ThemeProps, ThemeSchemes } from "../interfaces/theme";

/**
 * Theme config:
 * The definitions of the 'theme'
 * object will be considered as
 * the default version for the theme.
 */

const defaultColors = {
  light: "#FFFF",
};

const theme: ThemeProps = {
  current: ThemeSchemes.Light,
  colors: {
    light: {
      ...defaultColors,
      primary: "#5B00D0",
      secondary: "#E9E6F2",
    },
    dark: {
      ...defaultColors,
      primary: "#5B00D0",
      secondary: "#242424",
    },
  },
};

export default theme;
