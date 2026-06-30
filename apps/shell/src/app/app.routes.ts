import { Route } from '@angular/router';
import { ShellLayout } from './shell-layout/shell-layout';
import { Dashboard } from './dashboard/dashboard';
import { NotFound } from './not-found/not-found';

function loadRemote(
  loader: () => Promise<{ remoteRoutes: Route[] }>
): () => Promise<Route[]> {
  return () =>
    loader().then((m) => {
      if (!m?.remoteRoutes) {
        throw new Error('Remote module did not expose remoteRoutes');
      }
      return m.remoteRoutes;
    });
}

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: loadRemote(() => import('auth/Routes')),
  },
  {
    path: '',
    component: ShellLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      {
        path: 'talent',
        loadChildren: loadRemote(() => import('talent/Routes')),
      },
      {
        path: 'workforce',
        loadChildren: loadRemote(() => import('workforce/Routes')),
      },
      {
        path: 'coreHr',
        loadChildren: loadRemote(() => import('coreHr/Routes')),
      },
    ],
  },
  { path: '**', component: NotFound },
];
