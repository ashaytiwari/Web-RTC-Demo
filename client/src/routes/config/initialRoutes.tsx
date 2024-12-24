import React from "react";

import { IRoute } from "@interfaces/uiInterfaces/common";

const HomePage = React.lazy(() => import("@components/pages/home/Home"));
const LoginPage = React.lazy(() => import("@components/pages/login/Login"));

const initialRoutes: Array<IRoute> = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
];

export default initialRoutes;