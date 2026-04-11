import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section-padding bg-dark-100 relative overflow-hidden">
      <div class="container-max mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Image Section -->
          <div class="relative animate-on-scroll-left">
            <!-- Main Image -->
            <div class="relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Elite Coach Training"
                class="w-full h-[500px] lg:h-[600px] object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
            </div>
            
            <!-- Floating Stats Card -->
            <div class="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass-card p-6 
                        animate-float max-w-[200px]">
              <div class="font-display text-4xl text-primary-500 mb-1">10+</div>
              <div class="text-white/60 text-sm">Years of Excellence</div>
            </div>
            
            <!-- Red accent -->
            <div class="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-600/50 rounded-3xl"></div>
          </div>

          <!-- Content Section -->
          <div class="animate-on-scroll-right">
            <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
              About Me
            </span>
            <h2 class="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
              YOUR SUCCESS IS 
              <span class="text-gradient">MY MISSION</span>
            </h2>
            <p class="text-white/70 text-lg leading-relaxed mb-6">
              With over a decade of experience in elite fitness coaching, I have helped hundreds of athletes 
              and everyday individuals transform their bodies and minds. My approach combines science-backed 
              training methods with personalized attention to create lasting results.
            </p>
            <p class="text-white/70 text-lg leading-relaxed mb-8">
              Whether you are looking to build muscle, lose fat, improve athletic performance, or simply 
              feel better in your own skin, I am here to guide you every step of the way.
            </p>

            <!-- Credentials -->
            <div class="grid grid-cols-2 gap-4 mb-10">
              @for (credential of credentials; track credential.title) {
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path [attr.d]="credential.icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-white">{{ credential.title }}</div>
                    <div class="text-white/50 text-sm">{{ credential.subtitle }}</div>
                  </div>
                </div>
              }
            </div>

            <!-- CTA -->
            <a routerLink="/about" class="btn-primary inline-flex items-center gap-2">
              Learn My Story
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
export class AboutPreviewComponent {
  credentials = [
    {
      title: 'NASM Certified',
      subtitle: 'Personal Trainer',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
    },
    {
      title: 'Precision Nutrition',
      subtitle: 'Level 2 Coach',
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
    },
    {
      title: 'Sports Psychology',
      subtitle: 'Specialist',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'Strength & Conditioning',
      subtitle: 'CSCS Certified',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    }
  ];
}
