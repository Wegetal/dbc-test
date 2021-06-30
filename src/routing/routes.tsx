import * as Pages from "../components/pages";
import { Redirect } from "react-router-dom";
/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

const routes = [
  {
    component: Pages.Login,
    path: "/login",
    exact: true,
    auth: false,
  },
  {
    component: Pages.Home,
    exact: true,
    path: "/",
    auth: true,
  },
  {
    component: Pages.DragonCreate,
    exact: true,
    auth: true,
    path: "/dragon/create",
  },
  {
    component: Pages.Dragon,
    exact: true,
    auth: true,
    path: "/dragon/view/:id",
  },
  {
    component: Pages.DragonEdit,
    exact: true,
    auth: true,
    path: "/dragon/edit/:id",
  },
  {
    component: (props: any) => <Redirect to="/login" />,
    auth: false,
  },
  {
    component: (props: any) => <Redirect to="/" />,
    auth: true,
  },
];

export default routes;
