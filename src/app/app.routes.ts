import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Product } from './product/product';

export const routes: Routes = [
    {path:'login', component: Login},
    {path:'dashboard', component: Dashboard},
    {path:'product/:id', component:Product},
    {path:'', redirectTo:'login', pathMatch:'full'}
];
