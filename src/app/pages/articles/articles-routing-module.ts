import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePage } from './article.component';
import { ArticleFormPage } from './article-form/article-form.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlePage
  },
  {
    path: 'create',
    component: ArticleFormPage,
    data: {mode: 'create'}
  },
  {
    path: 'edit/:id',
    component: ArticleFormPage,
    data: {mode: 'edit'}
  },
  {
    path: 'view/:id',
    component: ArticleFormPage,
    data: {mode: 'view'}
  },
  {
    path: 'tinjau/:id',
    component: ArticleFormPage,
    data: {mode: 'tinjau'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
