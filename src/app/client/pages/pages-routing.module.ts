import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { authGuard } from '../guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        component: HomeComponent,
        title: "Mobile Maintenance Services - Home"
      },
      {
        path: 'about',
        component: AboutComponent,
        title: "Mobile Maintenance Services - About Us"
        // canActivate: [authGuard]
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: "Mobile Maintenance Services - Services"
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: "Mobile Maintenance Services - Contact"
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        title: "Mobile Maintenance Services - Privacy Policy"
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent,
        title: "Mobile Maintenance Services - Terms & Conditions"
      },
      {
        path: 'page-not-found',
        component: NotFoundComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
