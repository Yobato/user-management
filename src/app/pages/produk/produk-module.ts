import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdukRoutingModule } from './produk-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { ProdukPage } from './produk.component';
import { CreateProdukPage } from './create/create.component';


@NgModule({
  declarations: [ProdukPage, CreateProdukPage],
  imports: [
    CommonModule,
    ProdukRoutingModule,
    SharedModule
  ]
})
export class ProdukModule { }
