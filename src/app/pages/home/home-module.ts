import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { HomePage } from './home.component';
import { CreatePage } from './create/create';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    HomePage,
    CreatePage,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
