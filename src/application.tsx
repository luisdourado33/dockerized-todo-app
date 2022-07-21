import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./contexts/app-context";

import routes from "./config/routes";

const Application: React.FC<any> = () => {
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
        <BrowserRouter>
          <Routes>{renderRoutes}</Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default Application;
