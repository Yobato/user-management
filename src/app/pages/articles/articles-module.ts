import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing-module';
import { ArticlePage } from './article.component';
import { CreateArticlePage } from './create/create.component';
import { SharedModule } from '../../shared/shared-module';
import { EditArticlePage } from './edit/edit.component';


@NgModule({
  declarations: [
    ArticlePage,
    CreateArticlePage,
    EditArticlePage
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
