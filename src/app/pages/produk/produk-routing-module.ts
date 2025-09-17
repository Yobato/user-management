import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukPage } from './produk.component';
import { CreateProdukPage } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage,
  },
  {
    path: 'create',
    component: CreateProdukPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdukRoutingModule { }
