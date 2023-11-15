import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesTableComponent } from './features/quote/qoutes-table/qoutes-table.component';
import { QouteDetailsComponent } from './features/quote/qoute-details/qoute-details.component';
import { QouteAddComponent } from './features/quote/qoute-add/qoute-add.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GenreTableComponent } from './features/genre/genre-table/genre-table.component';
import { GenreAddComponent } from './features/genre/genre-add/genre-add.component';
import { GenreDetailsComponent } from './features/genre/genre-details/genre-details.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    QoutesTableComponent,
    QouteDetailsComponent,
    QouteAddComponent,
    LoginComponent,
    RegisterComponent,
    GenreTableComponent,
    GenreAddComponent,
    GenreDetailsComponent,
    NavbarComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
