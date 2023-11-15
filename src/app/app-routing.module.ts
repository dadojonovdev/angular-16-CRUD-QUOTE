import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QoutesTableComponent } from './features/quote/qoutes-table/qoutes-table.component'
import { QouteDetailsComponent } from './features/quote/qoute-details/qoute-details.component'
import { QouteAddComponent } from './features/quote/qoute-add/qoute-add.component'

import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: QoutesTableComponent},
  {path: 'add', component: QouteAddComponent},
  {path: 'quote/:id', component: QouteDetailsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
