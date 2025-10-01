import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMasterPage } from './product-master/product-master';
import { ProductMasterFormPage } from './product-master/product-master-form/product-master-form';
import { ProductCategoryPage } from './product-category/product-category';

const routes: Routes = [
  // PRODUK MASTER
  {
    path: 'product-master',
    component: ProductMasterPage
  },
  {
    path: 'product-master/create',
    component: ProductMasterFormPage,
    data: { mode: 'create' }
  },
  {
    path: 'product-master/edit/:id',
    component: ProductMasterFormPage,
    data: { mode: 'edit' }
  },
  {
    path: 'product-master/view/:id',
    component: ProductMasterFormPage,
    data: { mode: 'view' }
  },
  {
    path: 'product-master/tinjau/:id',
    component: ProductMasterFormPage,
    data: { mode: 'tinjau' }
  },

  // PRODUK KATEGORI
  {
    path: 'product-category',
    component: ProductCategoryPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterManagementRoutingModule { }
