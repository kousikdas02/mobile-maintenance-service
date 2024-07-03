import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
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
export class AdminRoutingModule { }
