import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared-module';
import { MasterManagementRoutingModule } from './master-management-routing-module';
import { ProductMasterPage } from './product-master/product-master';
import { ProductMasterFormPage } from './product-master/product-master-form/product-master-form';



@NgModule({
  declarations: [
    ProductMasterPage,
    ProductMasterFormPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    MasterManagementRoutingModule
  ]
})
export class MasterManagementModule { }
