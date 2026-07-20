import { Routes } from '@angular/router';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About | HIT Egypt'
  }
];
