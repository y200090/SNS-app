import { Navigate } from "react-router-dom";

import { Landing, Login } from "../pages";

export const publicRoutes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Navigate to='login' replace />,
      },
    ],
  },
];
