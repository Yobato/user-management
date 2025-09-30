import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoPage } from './promo';

const routes: Routes = [
  {
    path: '',
    component: PromoPage
  },
  {
    path: 'create',
    component: PromoPage,
    data: {mode: 'create'}
  },
  {
    path: 'edit/:id',
    component: PromoPage,
    data: {mode: 'edit'}
  },
  {
    path: 'view/:id',
    component: PromoPage,
    data: {mode: 'view'}
  },
  {
    path: 'tinjau/:id',
    component: PromoPage,
    data: {mode: 'tinjau'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }