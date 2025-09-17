import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePage } from './article.component';
import { CreateArticlePage } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlePage
  },
  {
    path: 'create',
    component: CreateArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
