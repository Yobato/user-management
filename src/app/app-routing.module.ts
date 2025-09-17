import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import komponen yang Anda buat
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomePage } from './pages/home/home.component';
import { UsersPage } from './pages/users/users.component';
import { CreatePage } from './pages/home/create/create';
import { ArticlePage } from './pages/articles/article.component';
import { CreateArticlePage } from './pages/articles/create/create.component';

export const routes: Routes = [
  {
    path: '', // Rute utama
    component: DashboardLayoutComponent,
    children: [ // <-- Gunakan 'children' untuk rute di dalamnya
      { path: '', redirectTo: 'articles', pathMatch: 'full' }, // Halaman default

      // --- Lazy load setiap fitur secara terpisah ---
      {
        path: 'articles', // Jika URL adalah '/articles'
        loadChildren: () => import('./pages/articles/articles-module').then(m => m.ArticlesModule)
      },
      {
        path: 'products', // Jika URL adalah '/users'
        loadChildren: () => import('./pages/produk/produk-module').then(m => m.ProdukModule)
      },
      {
        path: 'home', // Jika URL adalah '/home'
        loadChildren: () => import('./pages/home/home-module').then(m => m.HomeModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
