import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-dark relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                    bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container-max mx-auto relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-on-scroll">
          <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 class="font-display text-4xl sm:text-5xl md:text-6xl mb-6 text-balance">
            SUCCESS 
            <span class="text-gradient">STORIES</span>
          </h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto">
            Real results from real people. See what our community has achieved.
          </p>
        </div>

        <!-- Testimonials Slider -->
        <div class="relative">
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-out"
              [style.transform]="'translateX(-' + (activeIndex() * 100) + '%)'"
            >
              @for (testimonial of testimonials; track testimonial.name) {
                <div class="w-full flex-shrink-0 px-4">
                  <div class="glass-card p-8 md:p-12 max-w-4xl mx-auto">
                    <div class="flex flex-col md:flex-row gap-8 items-center">
                      <!-- Image -->
                      <div class="relative flex-shrink-0">
                        <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-600/50">
                          <img 
                            [src]="testimonial.image" 
                            [alt]="testimonial.name"
                            class="w-full h-full object-cover"
                          >
                        </div>
                        <!-- Quote icon -->
                        <div class="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary-600 
                                    flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>

                      <!-- Content -->
                      <div class="text-center md:text-left flex-1">
                        <!-- Stars -->
                        <div class="flex justify-center md:justify-start gap-1 mb-4">
                          @for (star of [1,2,3,4,5]; track star) {
                            <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          }
                        </div>
                        
                        <p class="text-white/80 text-lg md:text-xl leading-relaxed mb-6 italic">
                          "{{ testimonial.quote }}"
                        </p>
                        
                        <div>
                          <div class="font-semibold text-white text-lg">{{ testimonial.name }}</div>
                          <div class="text-primary-500">{{ testimonial.result }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Navigation Dots -->
          <div class="flex justify-center gap-3 mt-8">
            @for (testimonial of testimonials; track testimonial.name; let i = $index) {
              <button 
                class="w-3 h-3 rounded-full transition-all duration-300"
                [class.bg-primary-600]="activeIndex() === i"
                [class.w-8]="activeIndex() === i"
                [class.bg-white/30]="activeIndex() !== i"
                (click)="setActiveIndex(i)"
                [attr.aria-label]="'Go to testimonial ' + (i + 1)"
              ></button>
            }
          </div>

          <!-- Navigation Arrows -->
          <button 
            class="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 rounded-full bg-white/10 
                   flex items-center justify-center transition-all duration-300 hover:bg-primary-600
                   hidden md:flex"
            (click)="prev()"
            aria-label="Previous testimonial"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            class="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 rounded-full bg-white/10 
                   flex items-center justify-center transition-all duration-300 hover:bg-primary-600
                   hidden md:flex"
            (click)="next()"
            aria-label="Next testimonial"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
export class TestimonialsComponent {
  activeIndex = signal(0);

  testimonials = [
    {
      name: 'Marcus Johnson',
      quote: 'Working with this coaching program completely transformed my approach to fitness. I lost 45 pounds and gained confidence I never knew I had. The personalized attention made all the difference.',
      result: 'Lost 45 lbs in 6 months',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    },
    {
      name: 'Sarah Mitchell',
      quote: 'As a busy professional, I needed a program that fit my lifestyle. The online coaching platform gave me flexibility while still providing world-class guidance. I have never felt stronger!',
      result: 'Completed first marathon',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
    },
    {
      name: 'David Chen',
      quote: 'The nutrition coaching alone was worth it. I finally understand how to fuel my body properly. Combined with the training program, I have seen incredible muscle gains and improved energy.',
      result: 'Gained 20 lbs of muscle',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
    }
  ];

  setActiveIndex(index: number) {
    this.activeIndex.set(index);
  }

  prev() {
    const newIndex = this.activeIndex() === 0 
      ? this.testimonials.length - 1 
      : this.activeIndex() - 1;
    this.activeIndex.set(newIndex);
  }

  next() {
    const newIndex = this.activeIndex() === this.testimonials.length - 1 
      ? 0 
      : this.activeIndex() + 1;
    this.activeIndex.set(newIndex);
  }
}
