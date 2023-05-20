import { FiHome } from 'react-icons/fi';
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { IconType } from 'react-icons';
import { FaUsers } from "react-icons/fa";
import { APP_PREFIX_PATH } from "./AppConfig";

interface LinkItemProps {
  key: string;
  name: string;
  path: string;
  Icon: IconType;
}

const navigationConfig: Array<LinkItemProps> = [
  {
    key: 'dashboard',
    path: `${APP_PREFIX_PATH}/dashboard`,
    name: 'Dashboard',
    Icon: FiHome,
  },

  {
    key: 'users',
    path: `${APP_PREFIX_PATH}/users`,
    name: 'Register Users',
    Icon: FaUsers,
  },

  {
    key: 'admin',
    path: `${APP_PREFIX_PATH}/admins`,
    name: 'Register Admins',
    Icon: RiAdminLine,
  },

  {
    key: 'pharmacist',
    path: `${APP_PREFIX_PATH}/pharmacist`,
    name: 'Pharmacists',
    Icon: MdOutlineLocalPharmacy,
  },
]

export default navigationConfig;