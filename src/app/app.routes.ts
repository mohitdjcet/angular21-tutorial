import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { Profile } from './profile/profile';
import { canDeactivateGuard } from './can-deactivate-guard';

export const routes: Routes = [
    {path: 'login', component: Login},
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    },
    {
        path: 'profile',
        component: Profile,
        canDeactivate: [canDeactivateGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
