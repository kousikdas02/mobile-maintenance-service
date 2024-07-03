import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
