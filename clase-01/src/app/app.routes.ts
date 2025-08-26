import { Routes } from '@angular/router';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: 'bienvenida', 
        component: Bienvenida,
    },
    {
        path: 'error', 
        component: Error
    },
    {
        path: 'login', 
        component: Login
    }
];
