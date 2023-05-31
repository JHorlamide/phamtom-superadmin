import { Navigate, Outlet } from "react-router-dom";
import { AUTHENTICATED_ENTRY } from "../config/AppConfig";
import { useAppSelector } from "../store/store";

const PublicRoute = () => {
  const { access_token: token } = useAppSelector((state) => state.auth);
  return token ? <Navigate to={AUTHENTICATED_ENTRY} /> : <Outlet />;
};

export default PublicRoute;
