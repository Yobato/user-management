import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared-module';
import { PromoRoutingModule } from './promo-routing-module';
import { PromoPage } from './promo';


@NgModule({
  declarations: [
    PromoPage
  ],
  imports: [
    CommonModule,
    PromoRoutingModule,
    SharedModule
  ]
})
export class PromoModule { }

