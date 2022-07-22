import { useState, useEffect } from "react";
import { ThemeProps } from "../../interfaces/theme";

import THEME_CONFIGS from "../../config/theme";

const useTheme: any = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeProps>(THEME_CONFIGS);

  const handleSetCurrentTheme = () => {
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
    return function cleanup() {
      setCurrentTheme(THEME_CONFIGS);
    };
  }, []);

  return [currentTheme, handleSetCurrentTheme];
};

export default useTheme;
