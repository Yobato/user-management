import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoPage } from './promo';

const routes: Routes = [
  {
    path: '',
    component: PromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }