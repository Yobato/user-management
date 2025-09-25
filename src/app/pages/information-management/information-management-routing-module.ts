import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPage } from './about-us/about-us.component';
import { AboutUsFormPage } from './about-us/about-us-form/about-us-form.component';
import { FaqPage } from './faq/faq.component';
import { FaqFormPage } from './faq/faq-form/faq-form.component';

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
  },

  // FAQ
  {
    path: 'faq',
    component: FaqPage
  },
  {
    path: 'faq/create',
    component: FaqFormPage,
    data: { mode: 'create' }
  },
  {
    path: 'faq/edit/:id',
    component: FaqFormPage,
    data: { mode: 'edit' }
  },
  {
    path: 'faq/view/:id',
    component: FaqFormPage,
    data: { mode: 'view' }
  },
  {
    path: 'faq/tinjau/:id',
    component: FaqFormPage,
    data: { mode: 'tinjau' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationManagementRoutingModule { }
