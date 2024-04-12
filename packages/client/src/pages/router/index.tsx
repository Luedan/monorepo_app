import { createBrowserRouter } from "react-router-dom";
import HomePage from "../home";
import CashierPage from "../cashier";
import AdminPage from "../admin";
import ClientPage from "../clients";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/cashier",
    Component: CashierPage
  },
  {
    path: "/admin",
    Component: AdminPage
  },
  {
    path: "/clients",
    Component: ClientPage
  }
]);
