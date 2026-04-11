import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesPreviewComponent } from '../../components/services-preview/services-preview.component';
import { AboutPreviewComponent } from '../../components/about-preview/about-preview.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeroComponent,
    ServicesPreviewComponent,
    AboutPreviewComponent,
    TestimonialsComponent,
    StatsComponent,
    CtaSectionComponent
  ],
  template: `
    <div class="overflow-hidden">
      <app-hero />
      <app-stats />
      <app-services-preview />
      <app-about-preview />
      <app-testimonials />
      <app-cta-section />
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
    
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elements.forEach(el => this.observer?.observe(el));
  }
}
