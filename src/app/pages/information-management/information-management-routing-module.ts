import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPage } from './about-us/about-us.component';
import { AboutUsFormPage } from './about-us/about-us-form/about-us-form.component';

const routes: Routes = [
  // About Us
  {
    path: 'about-us',
    component: AboutUsPage
  },
  {
    path: 'about-us/edit',
    component: AboutUsFormPage,
    data: { mode: 'edit' }
  },
  {
    path: 'about-us/view',
    component: AboutUsFormPage,
    data: { mode: 'view' }
  },
  {
    path: 'about-us/tinjau',
    component: AboutUsFormPage,
    data: { mode: 'review' }
  }

  // FAQ
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationManagementRoutingModule { }
