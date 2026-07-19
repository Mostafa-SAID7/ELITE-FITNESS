import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'HIT Egypt | Your Beach Workout Clan'
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsPageComponent),
    title: 'Member Stories | HIT Egypt'
  },
  {
    path: 'submit-testimonial',
    loadComponent: () => import('./pages/submit-testimonial/submit-testimonial.component').then(m => m.SubmitTestimonialComponent),
    title: 'Share Your Story | HIT Egypt'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About | HIT Egypt'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Programs | HIT Egypt'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | HIT Egypt'
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    title: 'Privacy Policy | HIT Egypt'
  },
  {
    path: 'terms-of-service',
    loadComponent: () => import('./pages/terms-of-service/terms-of-service.component').then(m => m.TermsOfServiceComponent),
    title: 'Terms of Service | HIT Egypt'
  },
  {
    path: 'cookie-policy',
    loadComponent: () => import('./pages/cookie-policy/cookie-policy.component').then(m => m.CookiePolicyComponent),
    title: 'Cookie Policy | HIT Egypt'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
