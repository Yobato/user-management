import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.component';
import { CreatePage } from './home/create/create';
import { ArticlePage } from './article/article.component';
import { CreateArticlePage } from './article/create/create.component';
import { UsersPage } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePage },
  { path: 'home/create', component: CreatePage},
  { path: 'article', component: ArticlePage},
  { path: 'article/create', component: CreateArticlePage},
  { path: 'users', component: UsersPage}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
