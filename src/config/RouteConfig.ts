import React from "react";
import { APP_PREFIX_PATH} from "./AppConfig";

interface IRoute {
  [x: string]: any;
  key: string;
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>
}

export const publicRoute: IRoute[] = [
  {
    key: "dashboard",
    path: `/`,
    component: React.lazy(() => import("../views/Dashboard/DashBoard"))
  },

  {
    key: "users",
    path: `${APP_PREFIX_PATH}/users`,
    component: React.lazy(() => import("../views/Users/Users"))
  },

  {
    key: "admins",
    path: `${APP_PREFIX_PATH}/admins`,
    component: React.lazy(() => import("../views/Admins/Admins"))
  },

  {
    key: "pharmacist",
    path: `${APP_PREFIX_PATH}/pharmacist`,
    component: React.lazy(() => import("../views/Pharmacist/Pharmacist"))
  }
]