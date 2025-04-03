import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import vps from './pages/vps/index';
import compare from './pages/compare/index';
import minecraft from './pages/minecraft';
import dedicated from './pages/dedicated';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/legal/terms',
    component: Terms,
  },
  {
    path: '/legal/privacy',
    component: Privacy,
  },
  {
    path: '/vps',
    component: vps,
  },
  {
    path: '/minecraft',
    component: minecraft,
  },
  {
    path: '/dedicated',
    component: dedicated,
  },
  {
    path: '/compare',
    component: compare,
  },
  {
    path: '**',
    component: lazy(() => import('./pages/404')),
  },
];
