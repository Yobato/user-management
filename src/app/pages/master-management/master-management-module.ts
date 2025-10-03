import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared-module';
import { MasterManagementRoutingModule } from './master-management-routing-module';
import { ProductMasterPage } from './product-master/product-master';
import { ProductMasterFormPage } from './product-master/product-master-form/product-master-form';
import { ProductCategoryPage } from './product-category/product-category';
import { ProductCategoryFormPage } from './product-category/product-category-form/product-category-form';
import { PricingPage } from './pricing/pricing';
import { PricingFormPage } from './pricing/pricing-form/pricing-form';
import { MaritalStatusPage } from './marital-status/marital-status';
import { MaritalStatusFormPage } from './marital-status/marital-status-form/marital-status-form';
import { PropertyTypePage } from './property-type/property-type';



@NgModule({
  declarations: [
    ProductMasterPage,
    ProductMasterFormPage,
    ProductCategoryPage,
    ProductCategoryFormPage,
    PricingPage,
    PricingFormPage,
    MaritalStatusPage,
    MaritalStatusFormPage,
    PropertyTypePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    MasterManagementRoutingModule
  ]
})
export class MasterManagementModule { }
