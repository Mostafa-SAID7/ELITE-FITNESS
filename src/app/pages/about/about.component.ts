import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { aboutPageData } from '../../data/about-page.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="section-padding bg-black relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        </div>

        <div class="container-max mx-auto relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Content -->
            <div>
              <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
                {{ pageData.hero.badge }}
              </span>
              <h1 class="font-display text-5xl sm:text-6xl md:text-7xl mb-6">
                {{ pageData.hero.title.line1 }}
                <span class="text-gradient">{{ pageData.hero.title.line2 }}</span>
              </h1>
              <p class="text-white/70 text-lg leading-relaxed mb-6">
                {{ pageData.hero.description1 }}
              </p>
              <p class="text-white/70 text-lg leading-relaxed mb-8">
                {{ pageData.hero.description2 }}
              </p>

              <div class="flex flex-wrap gap-4">
                <a [routerLink]="pageData.hero.cta.primary.path" class="btn-primary">
                  {{ pageData.hero.cta.primary.label }}
                </a>
                <a [routerLink]="pageData.hero.cta.secondary.path" class="btn-secondary">
                  {{ pageData.hero.cta.secondary.label }}
                </a>
              </div>
            </div>

            <!-- Image -->
            <div class="relative">
              <div class="rounded-3xl overflow-hidden">
                <img 
                  [src]="pageData.hero.image"
                  [alt]="pageData.hero.imageAlt"
                  class="w-full h-[500px] lg:h-[600px] object-cover"
                >
              </div>
              <div class="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary-600/50 rounded-3xl"></div>
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="section-padding bg-black">
        <div class="container-max mx-auto">
          <div class="max-w-4xl mx-auto">
            <h2 class="font-display text-4xl sm:text-5xl text-center mb-12">
              {{ pageData.story.title.line1 }} <span class="text-gradient">{{ pageData.story.title.line2 }}</span>
            </h2>

            <div class="space-y-8 text-white/70 text-lg leading-relaxed">
              @for (paragraph of pageData.story.paragraphs; track $index) {
                <p>{{ paragraph }}</p>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="section-padding bg-black">
        <div class="container-max mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-display text-4xl sm:text-5xl mb-6">
              {{ pageData.philosophy.title.line1 }} <span class="text-gradient">{{ pageData.philosophy.title.line2 }}</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @for (pillar of pillars; track pillar.title) {
              <div class="glass-card p-8 text-center hover:border-primary-600/50 transition-all duration-300">
                <div class="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center mx-auto mb-6">
                  <span class="font-display text-3xl text-primary-500">{{ pillar.number }}</span>
                </div>
                <h3 class="font-display text-2xl mb-4">{{ pillar.title }}</h3>
                <p class="text-white/60 leading-relaxed">{{ pillar.description }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section class="section-padding bg-black">
        <div class="container-max mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-display text-4xl sm:text-5xl mb-6">
              {{ pageData.certifications.title.line1 }} <span class="text-gradient">{{ pageData.certifications.title.line2 }}</span>
            </h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            @for (cert of certifications; track cert.name) {
              <div class="glass-card p-6 text-center hover:border-primary-600/50 transition-all duration-300">
                <div class="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-white mb-1">{{ cert.name }}</h3>
                <p class="text-white/50 text-sm">{{ cert.org }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section-padding bg-black relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-600/10"></div>
        <div class="container-max mx-auto relative z-10 text-center">
          <h2 class="font-display text-4xl sm:text-5xl mb-6">
            {{ pageData.cta.title.line1 }}
            <span class="text-gradient">{{ pageData.cta.title.line2 }}</span>?
          </h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            {{ pageData.cta.description }}
          </p>
          <a [routerLink]="pageData.cta.button.path" class="btn-primary inline-flex items-center gap-2">
            {{ pageData.cta.button.label }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AboutComponent {
  pageData = aboutPageData;
  pillars = aboutPageData.philosophy.pillars;
  certifications = aboutPageData.certifications.items;
}
