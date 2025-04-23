import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './core/services/auth.service';

export const routes: Routes = [
    {
        path: 'employees',
        title: 'Mes employés - Mosali',
        loadComponent: () => import('./ui/home/home.component'),
        canActivate: [() => inject(AuthService).isLoggedIn()],
    },
    {
        path: 'login',
        title: 'connexion - Mosali',
        loadComponent: () => import('./ui/login/login.component'),
    },
    {
        path: 'add-employee',
        title: 'nouvel employé - Mosali',
        loadComponent: () => import('./ui/add-employee/add-employee.component'),
        canActivate: [() => inject(AuthService).isLoggedIn()],
    },
    {
        path: 'employees/:id',
        loadComponent: () => import('./ui/detail-employee/detail-employee.component'),
        canActivate: [() => inject(AuthService).isLoggedIn()],
    },
    {
        path: '404',
        title: "page non trouvé",
        loadComponent: () => import('./ui/page-not-found/page-not-found.component')
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employees',
    },
    {
        path: '**',
        redirectTo: '404',
    }
];
