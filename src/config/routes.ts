// eslint-disable-next-line no-unused-vars
import IRoute from "../interfaces/routes";

import HomePage from "../components/pages/home/home";
import LoginPage from "../components/pages/login/login";

const routes: IRoute[] = [
  { path: "/", name: "Homepage", element: HomePage, exact: true },
  { path: "/login", name: "Login", element: LoginPage, exact: true },
];

export default routes;
