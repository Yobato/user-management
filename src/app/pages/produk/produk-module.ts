import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdukRoutingModule } from './produk-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { ProdukPage } from './produk.component';


@NgModule({
  declarations: [ProdukPage],
  imports: [
    CommonModule,
    ProdukRoutingModule,
    SharedModule
  ]
})
export class ProdukModule { }
