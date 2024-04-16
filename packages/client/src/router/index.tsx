import { createBrowserRouter } from "react-router-dom";
import { routesAdmin } from "../apps/admin/pages/routes";
import { routesHome } from "../apps/home/pages/routes";
import { securityRoutes } from "../apps/security/pages/routes";

export const router = createBrowserRouter([
  routesHome,
  routesAdmin,
  ...securityRoutes,
]);
