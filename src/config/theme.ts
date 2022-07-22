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
  brand: "#5B00D0",
};

const theme: ThemeProps = {
  current: ThemeSchemes.Dark,
  colors: {
    light: {
      ...defaultColors,
      primary: "#5B00D0",
      secondary: "#E9E6F2",
      tertiary: "#131629",
      lightGray: "#7A7F8D",
    },
    dark: {
      ...defaultColors,
      primary: "#5B00D0",
      secondary: "#242424",
      tertiary: "#5b00d0",
      lightGray: "#7A7F8D",
    },
  },
};

export default theme;
