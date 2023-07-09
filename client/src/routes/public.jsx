import { Navigate } from "react-router-dom";
import { Landing, Login, Register } from "../pages";

export const publicRoutes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/*',
    element: <Navigate to='/login' />,
  },
];
