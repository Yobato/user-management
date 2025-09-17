import { NgModule } from '@angular/core';
import { HomePage } from './home/home.component';
import { ArticlePage } from './article/article.component';
import { UsersPage } from './users/users.component';
import { CreatePage } from './home/create/create';
import { CreateArticlePage } from './article/create/create.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [HomePage, CreatePage, ArticlePage, CreateArticlePage, UsersPage],
  imports: [
    SharedModule
  ]
})
export class PagesModule { }
