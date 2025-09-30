import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoPage } from './promo';
import { PromoFormPage } from './promo-form/promo-form';

const routes: Routes = [
  {
    path: '',
    component: PromoPage
  },
  {
    path: 'create',
    component: PromoFormPage,
    data: {mode: 'create'}
  },
  {
    path: 'edit/:id',
    component: PromoFormPage,
    data: {mode: 'edit'}
  },
  {
    path: 'view/:id',
    component: PromoFormPage,
    data: {mode: 'view'}
  },
  {
    path: 'tinjau/:id',
    component: PromoFormPage,
    data: {mode: 'tinjau'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }