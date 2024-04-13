import { createBrowserRouter } from "react-router-dom";
import HomePage from "../home";
import CashierPage from "../cashier";
import HomeAdmin from "../admin/pages/homeAdmin";
import ClientPage from "../clients";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/cashier",
    Component: CashierPage,
  },
  {
    path: "/admin",
    Component: HomeAdmin
  },
  {
    path: "/clients",
    Component: ClientPage
  }
]);
