import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPage } from './about-us/about-us.component';
import { AboutUsFormPage } from './about-us/about-us-form/about-us-form.component';
import { SharedModule } from '../../shared/shared-module';
import { InformationManagementRoutingModule } from './information-management-routing-module';



@NgModule({
  declarations: [
    AboutUsPage,
    AboutUsFormPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    InformationManagementRoutingModule
  ]
})
export class InformationManagementModule { }
