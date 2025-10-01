import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMasterPage } from './product-master/product-master';

const routes: Routes = [
  // FAQ
  {
    path: 'product-master',
    component: ProductMasterPage
  },
  // {
  //   path: 'faq/create',
  //   component: FaqFormPage,
  //   data: { mode: 'create' }
  // },
  // {
  //   path: 'faq/edit/:id',
  //   component: FaqFormPage,
  //   data: { mode: 'edit' }
  // },
  // {
  //   path: 'faq/view/:id',
  //   component: FaqFormPage,
  //   data: { mode: 'view' }
  // },
  // {
  //   path: 'faq/tinjau/:id',
  //   component: FaqFormPage,
  //   data: { mode: 'tinjau' }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterManagementRoutingModule { }
