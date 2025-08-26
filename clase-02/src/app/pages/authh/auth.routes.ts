import { Routes } from "@angular/router";

export const authRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login').then((r) => r.Login),
    },
    {
        path: 'registro',
        loadComponent: () => import('./registro/registro').then((r) => r.Registro),
    },
    {
        path: 'perfil',
        loadComponent: () => import('./perfil/perfil').then((r) => r.Perfil)
    }

]