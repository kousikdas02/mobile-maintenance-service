import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent } from './profile.component'
import {AccountDetailsComponent } from './account-details/account-details.component'
import { BillingComponent } from './billing/billing.component';
import { SecurityComponent } from './security/security.component';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'details',
        component: AccountDetailsComponent,
        title: "Mobile Maintenance Services - Account Details"
      },
      {
        path: 'billing',
        component: BillingComponent,
        title: "Mobile Maintenance Services - Billing"
      },
      {
        path: 'security',
        component: SecurityComponent,
        title: "Mobile Maintenance Services - Security"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
