import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ABOUT_DATA } from '@features/about/models/about.model';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="section-padding bg-black relative overflow-hidden">
      <div class="container-max mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Image Section -->
          <div class="relative animate-on-scroll-left">
            <!-- Main Image -->
            <div class="relative rounded-3xl overflow-hidden">
              <img 
                [src]="aboutData.image"
                [alt]="aboutData.imageAlt"
                class="w-full h-[500px] lg:h-[600px] object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            
            <!-- Floating Stats Card -->
            <div class="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass-card p-6 
                        animate-float max-w-[200px]">
              <div class="font-display text-4xl text-primary-500 mb-1">{{ aboutData.stats.value }}</div>
              <div class="text-white/60 text-sm">{{ aboutData.stats.label }}</div>
            </div>
            
            <!-- Red accent -->
            <div class="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-600/50 rounded-3xl"></div>
          </div>

          <!-- Content Section -->
          <div class="animate-on-scroll-right">
            <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
              {{ aboutData.badge }}
            </span>
            <h2 class="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
              {{ aboutData.heading.line1 }}
              <span class="text-gradient">{{ aboutData.heading.line2 }}</span>
            </h2>
            <p class="text-white/70 text-lg leading-relaxed mb-6">
              {{ aboutData.description1 }}
            </p>
            <p class="text-white/70 text-lg leading-relaxed mb-8">
              {{ aboutData.description2 }}
            </p>

            <!-- Credentials -->
            <div class="grid grid-cols-2 gap-4 mb-10">
              @for (credential of aboutData.credentials; track credential.title) {
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
            <a [routerLink]="aboutData.cta.path" class="btn-primary inline-flex items-center gap-2">
              {{ aboutData.cta.label }}
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
  aboutData = ABOUT_DATA;
}
