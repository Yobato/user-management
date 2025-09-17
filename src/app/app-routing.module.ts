import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import komponen yang Anda buat
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomePage } from './pages/home/home.component';
import { UsersPage } from './pages/users/users.component';
import { CreatePage } from './pages/home/create/create';
import { ArticlePage } from './pages/article/article.component';
import { CreateArticlePage } from './pages/article/create/create.component';

export const routes: Routes = [
  {
    path: '', // Rute utama
    component: DashboardLayoutComponent,
    loadChildren: () => import ('./pages/pages-module').then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
