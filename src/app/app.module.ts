import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar.component';
import { PerfilComponent } from './perfil.component';
import { Routes, RouterModule } from '@angular/router';


let rutas: Routes = [
  { path:'inicio', component: HomeComponent },
  { path:'perfil', component: PerfilComponent },
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, HomeComponent,NavbarComponent,PerfilComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
