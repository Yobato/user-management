import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePage } from './article.component';
import { CreateArticlePage } from './create/create.component';
import { EditArticlePage } from './edit/edit.component';
import { ViewArticlePage } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlePage
  },
  {
    path: 'create',
    component: CreateArticlePage
  },
  {
    path: 'edit/:id',
    component: EditArticlePage
  },
  {
    path: 'view/:id',
    component: ViewArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
