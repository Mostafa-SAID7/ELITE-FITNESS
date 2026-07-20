import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Programs | HIT Egypt'
  }
];
