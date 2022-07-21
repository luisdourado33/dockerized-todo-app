import React, { createContext, useState } from "react";

import { AppProps, ITask } from "../interfaces/context";

export const AppContext = createContext<AppProps | null>(null);

export const ContextProvider: React.FC<any> = ({ children }) => {
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

  return (
    <AppContext.Provider
      value={{
        tasks,
        saveTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
