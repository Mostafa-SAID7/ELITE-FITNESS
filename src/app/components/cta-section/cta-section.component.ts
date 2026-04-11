import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative py-24 md:py-32 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0">
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/80"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent"></div>
      </div>

      <div class="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl animate-on-scroll">
          <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
            Ready to Transform?
          </span>
          <h2 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
            YOUR JOURNEY TO 
            <span class="text-gradient">GREATNESS</span>
            STARTS NOW
          </h2>
          <p class="text-white/70 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Stop waiting for the perfect moment. Take the first step today and discover what you are truly capable of achieving.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <a routerLink="/contact" class="btn-primary group inline-flex items-center gap-2">
              <span>Book Free Consultation</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a routerLink="/services" class="btn-secondary">
              Explore Programs
            </a>
          </div>

          <!-- Guarantees -->
          <div class="mt-12 flex flex-wrap gap-6">
            @for (guarantee of guarantees; track guarantee) {
              <div class="flex items-center gap-2 text-white/60">
                <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ guarantee }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CtaSectionComponent {
  guarantees = [
    'Free initial assessment',
    '100% satisfaction guarantee',
    'Cancel anytime'
  ];
}
