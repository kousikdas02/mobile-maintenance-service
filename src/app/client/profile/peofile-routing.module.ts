import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent } from './profile.component'
import {AccountDetailsComponent } from './account-details/account-details.component'
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'details',
        component: AccountDetailsComponent,
        title: "Mobile Maintenance Services - Home"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
