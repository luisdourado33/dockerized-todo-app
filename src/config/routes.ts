// eslint-disable-next-line no-unused-vars
import IRoute from "../interfaces/routes";

import HomePage from "../components/pages/home";

const routes: IRoute[] = [
  { path: "/", name: "Homepage", element: HomePage, exact: true },
];

export default routes;
