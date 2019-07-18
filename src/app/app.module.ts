import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';

//Http
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SerComponent } from './components/ser/ser.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ArtistaComponent } from './components/artista/artista.component';
//Imortar rutas

import { ROUTES } from './app.routes';

import { TargetasComponent } from './components/shared/targetas/targetas.component';
//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    LoadingComponent,
    ArtistaComponent,
    TargetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES , { useHash:true } ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
