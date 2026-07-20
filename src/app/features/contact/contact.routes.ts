import { Routes } from '@angular/router';
import { CanDeactivateGuardService } from '@core/guards';

export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | HIT Egypt',
    canDeactivate: [CanDeactivateGuardService]
  }
];
