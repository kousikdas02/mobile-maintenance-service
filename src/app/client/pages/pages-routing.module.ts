import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { authGuard } from '../guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';

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
        canActivate: [authGuard]
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
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
