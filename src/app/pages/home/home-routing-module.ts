import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.component';
import { CreatePage } from './create/create';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'create',
    component: CreatePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
