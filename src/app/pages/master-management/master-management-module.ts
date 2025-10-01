import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared-module';
import { MasterManagementRoutingModule } from './master-management-routing-module';
import { ProductMasterPage } from './product-master/product-master';



@NgModule({
  declarations: [
    ProductMasterPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    MasterManagementRoutingModule
  ]
})
export class MasterManagementModule { }
