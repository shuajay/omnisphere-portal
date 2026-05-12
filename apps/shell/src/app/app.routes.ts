import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
