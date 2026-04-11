import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="section-padding bg-dark"><div class="container-max mx-auto"><h2 class="font-display text-4xl mb-6">Testimonials Coming Soon</h2></div></section>`,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class TestimonialsComponent {
  activeIndex = signal(0);
  testimonials = [];
  setActiveIndex(index: number) { this.activeIndex.set(index); }
  prev() { }
  next() { }
}
