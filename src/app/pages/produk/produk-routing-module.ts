import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukPage } from './produk.component';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdukRoutingModule { }
