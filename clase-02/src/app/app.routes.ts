import { Routes } from '@angular/router';
import { Usuarios } from './pages/usuarios/usuarios';
// import { Registro } from './pages/authh/registro/registro';
// import { Login } from './pages/authh/login/login';
// import { Bienvenida } from './pages/bienvenida/bienvenida';
// import { Auth } from './pages/authh/auth';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'bienvenida',
        pathMatch: 'full',
    },

    {
        path: 'bienvenida', 
        loadComponent: () => 
            import('./pages/bienvenida/bienvenida').then((m) => m.Bienvenida),
        //component: Bienvenida,
    },

    // {
    //     path: 'error', 
    //     loadComponent: () => import('./pages/error/error').then((m) => m.Error),
    //     //component: Error
    // },

    {
        path: 'auth',
        //component: Auth,
        loadComponent: () => 
            import('./pages/authh/auth').then((m) => m.Auth),
        loadChildren: () => import('./pages/authh/auth.routes').then((r) => r.authRoutes)
    },

    {
        path: 'usuarios',
        loadComponent: () => import('./pages/usuarios/usuarios').then((m) => m.Usuarios)
    },

    {
        path: 'usuarios/:id',
        component: Usuarios
    },

    {
        path: '**', //cualquier ruta no definida //component: error
        loadComponent: () => import('./pages/error/error').then((m) => m.Error)
        //component: Error,
        //redirectTo: 'bienvenida'
    },


];
