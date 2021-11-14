import {
  Home as HomeIcon,
  BarChartOutlined as DashboardIcon,
  AccountBoxRounded as UserIcon,
  SettingsOutlined as SettingsIcon,
  ListAlt as ListIcon,
  Apps as AppsIcon,
  ListAlt as ListAltIcon,
} from '@mui/icons-material';

import { Route } from '../types/Route';

const routes: Route[] = [
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    path: '/',
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
  // {
  //   key: 'router-dashboard',
  //   title: 'Dashboard',
  //   description: 'Dashboard',
  //   path: '/dashboard',
  //   isEnabled: true,
  //   icon: DashboardIcon,
  // },
  {
    key: 'router-apps',
    title: 'Apps',
    description: 'Apps',
    isEnabled: true,
    icon: AppsIcon,
    path: '/apps',
    expanded: true,
    subRoutes: [
      {
        key: 'router-tasks',
        title: 'Tasks',
        description: 'Tasks',
        path: '/app/tasks',
        isEnabled: true,
        icon: ListAltIcon,
      },
      // {
      //   key: 'router-gh-private',
      //   title: 'Private Repos',
      //   description: 'Private Repos',
      //   path: '/gh/private',
      //   isEnabled: false,
      //   icon: PrivateIcon,
      // },
    ],
  },
  // {
  //   key: 'router-code',
  //   title: 'Code Editor',
  //   description: 'Code Editor',
  //   path: '/code-editor',
  //   isEnabled: true,
  //   icon: CodeIcon,
  //   appendDivider: true,
  // },
  {
    key: 'router-my-account',
    title: 'My Account',
    description: 'My Account',
    path: '/account',
    isEnabled: true,
    icon: UserIcon,
    expanded: true,
    subRoutes: [
      {
        key: 'router-settings',
        title: 'Settings',
        description: 'Account Settings',
        path: '/account/settings',
        isEnabled: true,
        icon: SettingsIcon,
      },
      {
        key: 'router-preferences',
        title: 'Preferences',
        description: 'Account Preferences',
        path: '/account/preferences',
        isEnabled: true,
        icon: ListIcon,
      },
      // {
      //   key: 'router-billing',
      //   title: 'Billing',
      //   description: 'Account Billing',
      //   path: '/account/billing',
      //   isEnabled: true,
      //   icon: BillingIcon,
      // },
    ],
  },
];

export default routes;
