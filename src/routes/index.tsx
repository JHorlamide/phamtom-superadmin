import { Routes, Route, Navigate } from "react-router-dom";
import { protectedRoute, publicRoute } from "../config/RouteConfig";
import AppRoute from "./AppRoute";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute />}>
        {protectedRoute.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <AppRoute
                routeKey={route.key}
                component={route.component}
                // {...route.meta}
              />
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

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
    </Routes>
  );
}

export default AppRouter;
