import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>{renderRoutes}</Routes>
      </BrowserRouter>
    </>
  );
};

export default Application;
