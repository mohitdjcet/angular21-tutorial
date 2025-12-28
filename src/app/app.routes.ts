import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'contact', component: ContactComponent},
    //Wildcard route for a 404 page can be added here
    {path: '**', component: PageNotFound}
];
