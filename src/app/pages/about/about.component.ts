import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="section-padding bg-dark relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        </div>

        <div class="container-max mx-auto relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Content -->
            <div>
              <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
                About Me
              </span>
              <h1 class="font-display text-5xl sm:text-6xl md:text-7xl mb-6">
                THE MAN BEHIND 
                <span class="text-gradient">THE MISSION</span>
              </h1>
              <p class="text-white/70 text-lg leading-relaxed mb-6">
                My name is Alex Rivera, and for over a decade, I have dedicated my life to helping others 
                unlock their physical and mental potential. What started as a personal transformation has 
                evolved into a mission to change lives through fitness.
              </p>
              <p class="text-white/70 text-lg leading-relaxed mb-8">
                I believe that everyone has untapped potential waiting to be unleashed. My role is to be 
                your guide, your motivator, and your biggest supporter on this journey to becoming the 
                best version of yourself.
              </p>

              <div class="flex flex-wrap gap-4">
                <a routerLink="/contact" class="btn-primary">
                  Work With Me
                </a>
                <a routerLink="/services" class="btn-secondary">
                  View Programs
                </a>
              </div>
            </div>

            <!-- Image -->
            <div class="relative">
              <div class="rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Coach Alex Rivera"
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
      <section class="section-padding bg-dark-100">
        <div class="container-max mx-auto">
          <div class="max-w-4xl mx-auto">
            <h2 class="font-display text-4xl sm:text-5xl text-center mb-12">
              MY <span class="text-gradient">STORY</span>
            </h2>

            <div class="space-y-8 text-white/70 text-lg leading-relaxed">
              <p>
                Growing up, I was the kid who was always picked last for sports teams. Overweight, 
                lacking confidence, and struggling with my self-image, I never imagined that fitness 
                would become my life's purpose.
              </p>
              <p>
                Everything changed when I was 18. A moment of clarity led me to step into a gym for 
                the first time, and despite feeling completely out of place, something clicked. That 
                first workout sparked a transformation that would redefine my entire life.
              </p>
              <p>
                Over the next few years, I immersed myself in the science of fitness and nutrition. 
                I earned certifications from NASM, Precision Nutrition, and specialized in sports 
                psychology. But more importantly, I experienced firsthand the life-changing power of 
                physical transformation.
              </p>
              <p>
                Today, I have helped over 500 clients achieve results they once thought impossible. 
                From complete beginners to competitive athletes, I have had the privilege of guiding 
                people through their own transformations. And every single success story reminds me 
                why I do what I do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Philosophy Section -->
      <section class="section-padding bg-dark">
        <div class="container-max mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-display text-4xl sm:text-5xl mb-6">
              MY <span class="text-gradient">PHILOSOPHY</span>
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
      <section class="section-padding bg-dark-100">
        <div class="container-max mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-display text-4xl sm:text-5xl mb-6">
              CREDENTIALS & <span class="text-gradient">CERTIFICATIONS</span>
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
      <section class="section-padding bg-dark relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-primary-600/10"></div>
        <div class="container-max mx-auto relative z-10 text-center">
          <h2 class="font-display text-4xl sm:text-5xl mb-6">
            READY TO START YOUR 
            <span class="text-gradient">TRANSFORMATION</span>?
          </h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Let us work together to unlock your full potential and achieve the results you deserve.
          </p>
          <a routerLink="/contact" class="btn-primary inline-flex items-center gap-2">
            Schedule Free Consultation
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
  pillars = [
    {
      number: '01',
      title: 'CONSISTENCY',
      description: 'Results come from showing up every single day, not from occasional bursts of motivation. I teach you to build habits that last a lifetime.'
    },
    {
      number: '02',
      title: 'SCIENCE-BACKED',
      description: 'Every program I create is rooted in proven scientific principles. No fads, no gimmicks—just what actually works.'
    },
    {
      number: '03',
      title: 'INDIVIDUALIZED',
      description: 'Your body, your goals, your lifestyle. Every program is tailored specifically to you because one size never fits all.'
    }
  ];

  certifications = [
    { name: 'NASM-CPT', org: 'National Academy of Sports Medicine' },
    { name: 'Precision Nutrition L2', org: 'Precision Nutrition' },
    { name: 'CSCS', org: 'NSCA' },
    { name: 'Sports Psychology', org: 'ISSA' },
    { name: 'Corrective Exercise', org: 'NASM-CES' },
    { name: 'Performance Enhancement', org: 'NASM-PES' },
    { name: 'Nutrition Coach', org: 'ISSA' },
    { name: 'Kettlebell Specialist', org: 'ACE' }
  ];
}
