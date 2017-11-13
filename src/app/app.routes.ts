
import { Routes } from '@angular/router'

import {
    DashboardComponent,
} from './ui';



export const AppRoutes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent
    },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
]
