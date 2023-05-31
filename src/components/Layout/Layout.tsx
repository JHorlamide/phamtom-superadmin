import { Suspense } from "react";
import AppLoader from "../AppLoader/AppLoader";
import AppRouter from "../../routes";

// import { useAppSelector } from "../../store/store";
// import SidebarWithHeader from "./SidebarWithHeader/SidebarWithHeader";
// import AuthLayout from "./AuthLayout";

const Layout = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <AppRouter />
    </Suspense>
  );
}

export default Layout;