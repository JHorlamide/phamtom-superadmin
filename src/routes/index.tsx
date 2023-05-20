import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoute } from "../config/RouteConfig";
import AppRoute from "./AppRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicRoute />}>
        {publicRoute.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <AppRoute
                routeKey={route.key}
                component={route.component}
              />
            }
          />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
