import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Setting } from './dashboard/setting/setting';

export const routes: Routes = [
    {
        path: 'dashboard', 
        component: Dashboard,
        children: [
            {path: 'profile', component: Profile},
            {path: 'setting', component: Setting}
        ]
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
