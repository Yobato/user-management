import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing-module';
import { ArticlePage } from './article.component';
import { SharedModule } from '../../shared/shared-module';
import { ArticleFormPage } from './article-form/article-form.component';


@NgModule({
  declarations: [
    ArticlePage,
    ArticleFormPage
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
