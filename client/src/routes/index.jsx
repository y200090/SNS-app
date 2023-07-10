import { Navigate, Route, Routes, useRoutes } from 'react-router-dom'

import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { useSupabaseAuth } from '../contexts/SupabaseAuthContext';
import { LoadingSpinner } from '../components';
import { Chat, Home, Landing, Login } from '../pages';

export const AppRoutes = () => {
  const { session, isLoading } = useSupabaseAuth();
  console.log(session, isLoading);

  if (isLoading) {
    return <LoadingSpinner />;

  } else if (session) {
    return <ProtectedRoutes />;

  } else {
    return <PublicRoutes />
  }
}

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/*' element={<Navigate to='/home' />} />
    </Routes>
  );
};

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Navigate to='login' />} />
      </Route>
    </Routes>
  );
};

const AppRoutes2 = () => {
  const { session } = useSupabaseAuth();
  console.log(session);

  const routes = session ? privateRoutes : publicRoutes;

  const element = useRoutes(routes);

  return element;
};
