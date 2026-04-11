import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent"></div>
        <!-- Red accent gradient -->
        <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary-600/20 to-transparent"></div>
      </div>

      <!-- Animated particles/elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        @for (particle of particles; track particle.id) {
          <div 
            class="absolute w-1 h-1 rounded-full bg-primary-500/30 animate-float"
            [style.left.%]="particle.x"
            [style.top.%]="particle.y"
            [style.animation-delay.s]="particle.delay"
            [style.animation-duration.s]="particle.duration"
          ></div>
        }
      </div>

      <!-- Content -->
      <div class="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div class="max-w-4xl">
          <!-- Badge -->
          <div class="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/20 
                      border border-primary-600/30 mb-8">
            <span class="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span class="text-primary-400 text-sm font-medium tracking-wider uppercase">
              Transform Your Life Today
            </span>
          </div>

          <!-- Main Heading -->
          <h1 class="animate-slide-up font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
                     leading-none tracking-tight mb-6">
            <span class="text-white">UNLEASH</span>
            <br>
            <span class="text-gradient">YOUR POTENTIAL</span>
          </h1>

          <!-- Subheading -->
          <p class="animate-slide-up text-white/70 text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed"
             style="animation-delay: 0.2s">
            Elite fitness coaching designed to push your limits, build unstoppable strength, 
            and transform your body into a powerful machine.
          </p>

          <!-- CTA Buttons -->
          <div class="animate-slide-up flex flex-wrap gap-4" style="animation-delay: 0.4s">
            <a routerLink="/contact" class="btn-primary group flex items-center gap-2">
              <span>Start Your Journey</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a routerLink="/services" class="btn-secondary">
              View Programs
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="animate-slide-up mt-16 flex flex-wrap items-center gap-8" style="animation-delay: 0.6s">
            <div class="flex items-center gap-3">
              <div class="flex -space-x-3">
                @for (avatar of avatars; track avatar) {
                  <div class="w-10 h-10 rounded-full border-2 border-dark bg-dark-50 overflow-hidden">
                    <img [src]="avatar" alt="Client" class="w-full h-full object-cover">
                  </div>
                }
              </div>
              <div class="text-sm">
                <div class="text-white font-semibold">500+ Athletes</div>
                <div class="text-white/50">Transformed</div>
              </div>
            </div>
            <div class="h-10 w-px bg-white/20 hidden sm:block"></div>
            <div class="flex items-center gap-2">
              <div class="flex text-primary-500">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
              </div>
              <div class="text-sm">
                <span class="text-white font-semibold">4.9</span>
                <span class="text-white/50"> Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div class="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
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
export class HeroComponent {
  particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5
  }));

  avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  ];
}
