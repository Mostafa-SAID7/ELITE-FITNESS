import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section-padding bg-dark relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      
      <div class="container-max mx-auto relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-on-scroll">
          <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 class="font-display text-4xl sm:text-5xl md:text-6xl mb-6 text-balance">
            PROGRAMS DESIGNED FOR 
            <span class="text-gradient">CHAMPIONS</span>
          </h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto">
            Choose the program that matches your goals. Every journey starts with a single step.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          @for (service of services; track service.title; let i = $index) {
            <div 
              class="group glass-card p-8 transition-all duration-500 hover:bg-white/10 
                     hover:border-primary-600/50 hover:-translate-y-2 animate-on-scroll"
              [class]="'stagger-' + (i + 1)"
            >
              <!-- Icon -->
              <div class="w-16 h-16 rounded-2xl bg-primary-600/20 flex items-center justify-center mb-6
                          group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                <svg class="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path [attr.d]="service.icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
              </div>
              
              <!-- Content -->
              <h3 class="font-display text-2xl mb-4 group-hover:text-primary-500 transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-white/60 mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              
              <!-- Features -->
              <ul class="space-y-3 mb-8">
                @for (feature of service.features; track feature) {
                  <li class="flex items-center gap-3 text-sm text-white/70">
                    <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </li>
                }
              </ul>
              
              <!-- Link -->
              <a 
                routerLink="/services"
                class="inline-flex items-center gap-2 text-primary-500 font-medium
                       transition-all duration-300 group-hover:gap-4"
              >
                Learn More
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          }
        </div>

        <!-- View All Button -->
        <div class="text-center mt-12 animate-on-scroll">
          <a routerLink="/services" class="btn-secondary inline-flex items-center gap-2">
            View All Programs
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
export class ServicesPreviewComponent {
  services = [
    {
      title: 'PERSONAL TRAINING',
      description: 'One-on-one sessions tailored to your specific goals with real-time feedback and motivation.',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      features: [
        'Customized workout plans',
        'Form correction & technique',
        'Progress tracking',
        'Flexible scheduling'
      ]
    },
    {
      title: 'NUTRITION COACHING',
      description: 'Science-backed nutrition strategies to fuel your performance and accelerate results.',
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      features: [
        'Personalized meal plans',
        'Macro tracking guidance',
        'Supplement recommendations',
        'Weekly check-ins'
      ]
    },
    {
      title: 'ONLINE PROGRAMS',
      description: 'Train anywhere, anytime with our comprehensive digital coaching platform.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      features: [
        'Video workout library',
        'Mobile app access',
        'Community support',
        '24/7 coach messaging'
      ]
    }
  ];
}
