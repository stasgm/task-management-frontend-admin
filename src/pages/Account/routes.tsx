import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import NotFound from '../../components/NotFound';
import Settings from './Settings';
import Preferences from './Preferences';

const Account = () => {
  return (
    <h1>Account</h1>
  )
};

const routes = (): RouteObject[] => [
  {
    path: '/',
    // element: <Account />,
    children: [
      { path: '/', element: <Navigate to={'settings'} />, index: true },
      { path: '/settings', element: <Settings /> },
      { path: '/preferences', element: <Preferences /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
