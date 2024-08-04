import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./profile/peofile-routing.module').then(m => m.ProfileRoutingModule),
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
