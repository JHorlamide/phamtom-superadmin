import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "./AppConfig";
import DashBoard from "../views/app-view/Dashboard/DashBoard";
import Users from "../views/app-view/Users/Users";
import Admins from "../views/app-view/Admins/Admins";
import Pharmacist from "../views/app-view/Pharmacist/Pharmacist";
import PharmacistDetails from "../views/app-view/Pharmacist/PharmaciesDetail";
import Login from "../views/auth-view/Login"
import AdminDetails from "../views/app-view/Admins/AdminDetails";

interface IRoute {
  [x: string]: any;
  key: string;
  path: string;
  component: () => JSX.Element;
}

export const protectedRoute: IRoute[] = [
  {
    key: "dashboard",
    path: `/`,
    component: DashBoard
  },

  {
    key: "users",
    path: `${APP_PREFIX_PATH}/users`,
    component: Users
  },

  {
    key: "admins",
    path: `${APP_PREFIX_PATH}/admins`,
    component: Admins
  },

  {
    key: "admins-details",
    path: `${APP_PREFIX_PATH}/admins/:adminId`,
    component: AdminDetails
  },

  {
    key: "pharmacist",
    path: `${APP_PREFIX_PATH}/pharmacist`,
    component: Pharmacist
  },
  
  {
    key: "pharmacist-details",
    path: `${APP_PREFIX_PATH}/pharmacist/:pharmacyId`,
    component: PharmacistDetails
  }
]

export const publicRoute: IRoute[] = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: Login
  },
]