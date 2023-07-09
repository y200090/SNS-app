import { useRoutes } from 'react-router-dom'
import { privateRoutes } from './private';
import { publicRoutes } from './public';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const AppRoutes = () => {
  const { session } = useContext(AuthContext);
  console.log(session);

  const routes = session ? privateRoutes : publicRoutes;

  const element = useRoutes(routes);
  
  return element;
};
