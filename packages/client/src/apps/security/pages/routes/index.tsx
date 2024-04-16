import { RouteObject } from "react-router-dom";
import LoginPage from "../login";

export const securityRoutes: RouteObject[] = [{
    path: "/login",
    element: <LoginPage />,
}];
