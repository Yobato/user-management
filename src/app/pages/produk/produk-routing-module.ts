import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukPage } from './produk.component';
import { CreateProdukPage } from './create/create.component';
import { EditProdukPage } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage,
  },
  {
    path: 'create',
    component: CreateProdukPage,
  },
  {
    path: 'edit/:id',
    component: EditProdukPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdukRoutingModule { }
