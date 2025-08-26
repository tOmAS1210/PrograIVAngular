import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'bienvenida',
        pathMatch: 'full'
    },

    {   
        path: 'bienvenida', 
        loadComponent: () => import('./bienvenida/bienvenida').then((m) => m.Bienvenida)
    },

    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },

    {
        path: 'registro',
        loadComponent: () => import('./registro/registro').then(m => m.Registro)
    },

    {
        path: 'sobre-mi',
        loadComponent: () => import('./sobre-mi/sobre-mi').then(m => m.SobreMi)
    },

    {
        path: '**',
        loadComponent: () => import('./error/error').then(m => m.Error)
    }


];
