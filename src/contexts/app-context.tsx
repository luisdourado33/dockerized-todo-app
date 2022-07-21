import React, { createContext, useState } from "react";

import { AppProps, ITask } from "../interfaces/context";
import { ThemeProps } from "../interfaces/theme";

import ThemeProvider from "../theme";
import themeInitials from "../theme/styles";

export const AppContext = createContext<AppProps | null>(null);

export const ContextProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(themeInitials);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const saveTask = (task: ITask): boolean => {
    if (task) {
      setTasks((prev) => [...prev, task]);
      return true;
    }

    return false;
  };

  const deleteTask = (taskId: number): boolean => {
    if (taskId) {
      const updatedTaskList = tasks.filter((task) => task.id != taskId);
      setTasks(updatedTaskList);
      return true;
    }

    return false;
  };

  const switchTheme = (): void => {
    setTheme((prev) => {
      let newTheme = { ...prev };
      newTheme["current"] = prev.current === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  const valueMapped = {
    theme,
    switchTheme,
    tasks,
    saveTask,
    deleteTask,
  };

  return (
    <AppContext.Provider value={valueMapped}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
