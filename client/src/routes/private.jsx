import { Navigate, Outlet } from "react-router-dom";
import { Chat, Home } from "../pages";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export const privateRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: '*',
        element: <Navigate to='/home' />,
      },
    ]
  }
];
