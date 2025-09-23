import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukPage } from './produk.component';
import { ProdukFormPage } from './produk-form/produk-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage,
  },
  {
    path: 'create',
    component: ProdukFormPage,
    data: {mode: 'create'}
  },
  {
    path: 'edit/:id',
    component: ProdukFormPage,
    data: {mode: 'edit'}
  },
  {
    path: 'view/:id',
    component: ProdukFormPage,
    data: {mode: 'view'}
  },
  {
    path: 'tinjau/:id',
    component: ProdukFormPage,
    data: {mode: 'tinjau'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdukRoutingModule { }
