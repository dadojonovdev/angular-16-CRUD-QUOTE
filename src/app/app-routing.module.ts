import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QoutesTableComponent } from './quote/qoutes-table/qoutes-table.component'
import { QouteDetailsComponent } from './quote/qoute-details/qoute-details.component'
import { QouteAddComponent } from './quote/qoute-add/qoute-add.component'

const routes: Routes = [
  {path: '', component: QoutesTableComponent},
  {path: 'add', component: QouteAddComponent},
  {path: 'quote/:id', component: QouteDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
