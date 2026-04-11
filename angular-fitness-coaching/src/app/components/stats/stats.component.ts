import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-16 md:py-20 bg-dark border-y border-white/10">
      <!-- Red glow effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-primary-600/5"></div>
      
      <div class="container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          @for (stat of stats; track stat.label; let i = $index) {
            <div 
              class="text-center animate-on-scroll-scale"
              [class]="'stagger-' + (i + 1)"
            >
              <div class="font-display text-4xl sm:text-5xl md:text-6xl text-gradient mb-2">
                {{ stat.value }}
              </div>
              <div class="text-white/60 text-sm sm:text-base uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
          }
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
export class StatsComponent {
  stats = [
    { value: '500+', label: 'Clients Transformed' },
    { value: '10+', label: 'Years Experience' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Support Available' },
  ];
}
