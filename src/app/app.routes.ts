import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home' }},
    { path: 'details/:id', component: DetailsComponent, data: { title: 'Details' }},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
