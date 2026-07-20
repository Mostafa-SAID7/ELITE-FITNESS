import { Routes } from '@angular/router';

export const TESTIMONIALS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/testimonials-list/testimonials.component').then(m => m.TestimonialsPageComponent),
    title: 'Member Stories | HIT Egypt'
  },
  {
    path: 'submit',
    loadComponent: () => import('./pages/testimonial-submit/submit-testimonial.component').then(m => m.SubmitTestimonialComponent),
    title: 'Share Your Story | HIT Egypt'
  }
];
