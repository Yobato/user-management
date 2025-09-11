import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import komponen yang Anda buat
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomePage } from './pages/home/home.component';
import { UsersPage } from './pages/users/users.component';
import { CreatePage } from './pages/home/create/create';

export const routes: Routes = [
  {
    path: '', // Rute utama
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
      { path: 'home/create', component: CreatePage },
      { path: 'users', component: UsersPage },
    ]
  },
  // Jika ada halaman tanpa layout, bisa ditambahkan di luar children
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
