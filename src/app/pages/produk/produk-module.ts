import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdukRoutingModule } from './produk-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { ProdukPage } from './produk.component';
import { ProdukFormPage } from './produk-form/produk-form.component';


@NgModule({
  declarations: [ProdukPage, ProdukFormPage],
  imports: [
    CommonModule,
    ProdukRoutingModule,
    SharedModule
  ]
})
export class ProdukModule { }
