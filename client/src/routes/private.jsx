import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Center, Spinner } from "@chakra-ui/react";

import { Chat, Home } from "../pages";

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Center h='100vh' w='100vw'>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export const privateRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
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
        element: <Navigate to='home' replace />,
      },
    ],
  },
];
