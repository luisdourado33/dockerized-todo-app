import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./contexts/app-context";
import ThemeProvider from "./theme";

import routes from "./config/routes";

const Application: React.FC<{}> = () => {
  const renderRoutes: any = routes.map((route, index) => (
    <Route
      key={index}
      {...route}
      element={<route.element name={route.name} {...route.props} />}
    />
  ));

  return (
    <>
      <ContextProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>{renderRoutes}</Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
};

export default Application;
