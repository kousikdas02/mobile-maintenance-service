import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./client/client-routing.module').then(m => m.ClientRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];
