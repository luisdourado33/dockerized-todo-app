import { useState, useEffect } from "react";
import { ThemeProps } from "../../interfaces/theme";

import THEME_CONFIGS from "../../config/theme";

const useTheme: any = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeProps>(THEME_CONFIGS);

  const switchTheme = (): void => {
    setCurrentTheme((values) => {
      return {
        ...values,
        current: values.current == "light" ? "dark" : "light",
        colors:
          values.current == "light"
            ? THEME_CONFIGS.colors.dark
            : THEME_CONFIGS.colors.light,
      };
    });
  };

  useEffect(() => {
    setCurrentTheme((prev) => {
      return {
        ...prev,
        colors:
          currentTheme.current === "light"
            ? THEME_CONFIGS.colors.light
            : THEME_CONFIGS.colors.dark,
      };
    });
    return function cleanup() {
      setCurrentTheme(THEME_CONFIGS);
    };
  }, []);

  return [currentTheme, switchTheme];
};

export default useTheme;
