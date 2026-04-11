import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Elite Fitness Coaching | Transform Your Body & Mind'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About | Elite Fitness Coaching'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Services | Elite Fitness Coaching'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Elite Fitness Coaching'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
