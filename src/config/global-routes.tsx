import { Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router';

import appRoutes from '../pages/routes';
import accountRoutes from '../pages/Account/routes';
import NotFound from '../components/NotFound';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home';


const Apps = () => useRoutes(appRoutes());
const Account = () => useRoutes(accountRoutes());

const routes = (isLoggedIn: boolean): RouteObject[] => [
  {
    path: '/',
    element: isLoggedIn ? <Home /> : <Navigate to={'/auth/login'} />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/auth',
    // element: isLoggedIn ? <Home /> : <Login />,
    children: [
      { path: '/auth/login', element: <Login />},
      { path: '/auth/register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/app/*',
    element: isLoggedIn ? <Apps /> : <Navigate to={'/login'} />,
  },
  {
    path: '/account/*',
    element: isLoggedIn ? <Account /> : <Navigate to={'/login'} />,
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
