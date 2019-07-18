import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SerComponent } from './components/ser/ser.component';

export const ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SerComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' }
];