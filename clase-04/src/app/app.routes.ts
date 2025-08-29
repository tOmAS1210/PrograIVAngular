import { Routes } from '@angular/router';
import { Tutoriales } from './pages/tutoriales/tutoriales';
import { App } from './app';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
    {
        path: '',
        component: App
    },

    {
        path: 'tutoriales',
        component: Tutoriales
    },

    {
        path: 'registro',
        component: Registro
        //loadComponent: () => import('./pages/registro/registro').then((m) => m.Registro)
    }
];
