import { Route } from '@angular/router';
import { ShellLayout } from './shell-layout/shell-layout';
import { Dashboard } from './dashboard/dashboard';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('auth/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: ShellLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      {
        path: 'talent',
        loadChildren: () => import('talent/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'workforce',
        loadChildren: () => import('workforce/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'coreHr',
        loadChildren: () => import('coreHr/Routes').then((m) => m!.remoteRoutes),
      },
    ],
  },
];
