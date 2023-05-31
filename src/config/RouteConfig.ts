import React from "react";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "./AppConfig";

interface IRoute {
  [x: string]: any;
  key: string;
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>
}

export const protectedRoute: IRoute[] = [
  {
    key: "dashboard",
    path: `/`,
    component: React.lazy(() => import("../views/app-view/Dashboard/DashBoard"))
  },

  {
    key: "users",
    path: `${APP_PREFIX_PATH}/users`,
    component: React.lazy(() => import("../views/app-view/Users/Users"))
  },

  {
    key: "admins",
    path: `${APP_PREFIX_PATH}/admins`,
    component: React.lazy(() => import("../views/app-view/Admins/Admins"))
  },

  {
    key: "pharmacist",
    path: `${APP_PREFIX_PATH}/pharmacist`,
    component: React.lazy(() => import("../views/app-view/Pharmacist/Pharmacist"))
  }
]

export const publicRoute: IRoute[] = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() => import("../views/auth-view/Login"))
  },
]