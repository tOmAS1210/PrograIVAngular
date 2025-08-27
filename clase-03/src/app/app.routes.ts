import { Routes } from '@angular/router';
import { Alumnos } from './pages/alumnos/alumnos';
import { App } from './app';
import { Profesores } from './pages/profesores/profesores';

export const routes: Routes = [

    {
        path: '',
        component: App
    },


    {
        path: 'alumnos',
        loadComponent: () => 
            import('./pages/alumnos/alumnos').then((m) => m.Alumnos),
    },

    {
        path: 'profesores',
        component: Profesores
    }
];
