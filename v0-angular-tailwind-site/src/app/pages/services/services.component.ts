import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="section-padding bg-dark relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container-max mx-auto relative z-10 text-center">
          <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
            Our Programs
          </span>
          <h1 class="font-display text-5xl sm:text-6xl md:text-7xl mb-6">
            ELITE <span class="text-gradient">TRAINING</span> PROGRAMS
          </h1>
          <p class="text-white/60 text-lg max-w-2xl mx-auto">
            Choose the program that aligns with your goals. Every program includes personalized attention 
            and proven strategies for maximum results.
          </p>
        </div>
      </section>

      <!-- Programs Section -->
      <section class="section-padding bg-dark-100">
        <div class="container-max mx-auto">
          <div class="space-y-20">
            @for (program of programs; track program.title; let i = $index; let even = $even) {
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                   [class.lg:flex-row-reverse]="!even">
                <!-- Image -->
                <div class="relative" [class.lg:order-2]="!even">
                  <div class="rounded-3xl overflow-hidden">
                    <img 
                      [src]="program.image"
                      [alt]="program.title"
                      class="w-full h-[400px] lg:h-[500px] object-cover"
                    >
                  </div>
                  <!-- Price Badge -->
                  <div class="absolute -bottom-4 -right-4 glass-card px-6 py-4">
                    <div class="text-white/50 text-sm">Starting at</div>
                    <div class="font-display text-3xl text-primary-500">{{ program.price }}</div>
                    <div class="text-white/50 text-sm">{{ program.priceUnit }}</div>
                  </div>
                </div>

                <!-- Content -->
                <div [class.lg:order-1]="!even">
                  <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
                    {{ program.category }}
                  </span>
                  <h2 class="font-display text-4xl sm:text-5xl mb-6">
                    {{ program.title }}
                  </h2>
                  <p class="text-white/70 text-lg leading-relaxed mb-8">
                    {{ program.description }}
                  </p>

                  <!-- Features -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    @for (feature of program.features; track feature) {
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                          <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <span class="text-white/80">{{ feature }}</span>
                      </div>
                    }
                  </div>

                  <a routerLink="/contact" class="btn-primary inline-flex items-center gap-2">
                    Get Started
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Comparison Table -->
      <section class="section-padding bg-dark">
        <div class="container-max mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-display text-4xl sm:text-5xl mb-6">
              COMPARE <span class="text-gradient">PROGRAMS</span>
            </h2>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full min-w-[800px]">
              <thead>
                <tr class="border-b border-white/10">
                  <th class="text-left py-6 px-4 text-white/50 font-normal">Features</th>
                  @for (plan of comparisonPlans; track plan.name) {
                    <th class="text-center py-6 px-4">
                      <div class="font-display text-xl" [class.text-primary-500]="plan.popular">
                        {{ plan.name }}
                      </div>
                      @if (plan.popular) {
                        <span class="inline-block text-xs bg-primary-600 text-white px-2 py-1 rounded-full mt-2">
                          Most Popular
                        </span>
                      }
                    </th>
                  }
                </tr>
              </thead>
              <tbody>
                @for (feature of comparisonFeatures; track feature.name) {
                  <tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td class="py-4 px-4 text-white/70">{{ feature.name }}</td>
                    @for (plan of comparisonPlans; track plan.name) {
                      <td class="text-center py-4 px-4">
                        @if (feature.values[plan.name] === true) {
                          <svg class="w-6 h-6 text-primary-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        } @else if (feature.values[plan.name] === false) {
                          <svg class="w-6 h-6 text-white/20 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        } @else {
                          <span class="text-white/80">{{ feature.values[plan.name] }}</span>
                        }
                      </td>
                    }
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="section-padding bg-dark-100">
        <div class="container-max mx-auto">
          <div class="text-center mb-16">
            <h2 class="font-display text-4xl sm:text-5xl mb-6">
              FREQUENTLY ASKED <span class="text-gradient">QUESTIONS</span>
            </h2>
          </div>

          <div class="max-w-3xl mx-auto space-y-4">
            @for (faq of faqs; track faq.question; let i = $index) {
              <div class="glass-card overflow-hidden">
                <button 
                  class="w-full px-6 py-5 text-left flex items-center justify-between gap-4
                         hover:bg-white/5 transition-colors"
                  (click)="toggleFaq(i)"
                >
                  <span class="font-semibold text-white">{{ faq.question }}</span>
                  <svg 
                    class="w-5 h-5 text-primary-500 transition-transform duration-300 flex-shrink-0"
                    [class.rotate-180]="faq.open"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  class="overflow-hidden transition-all duration-300"
                  [style.max-height]="faq.open ? '200px' : '0'"
                >
                  <div class="px-6 pb-5 text-white/60 leading-relaxed">
                    {{ faq.answer }}
                  </div>
                </div>
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
            NOT SURE WHICH PROGRAM IS 
            <span class="text-gradient">RIGHT FOR YOU</span>?
          </h2>
          <p class="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Book a free consultation and let us help you find the perfect fit for your goals and lifestyle.
          </p>
          <a routerLink="/contact" class="btn-primary inline-flex items-center gap-2">
            Book Free Consultation
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
export class ServicesComponent {
  programs = [
    {
      title: 'PERSONAL TRAINING',
      category: '1-on-1 Coaching',
      description: 'Get undivided attention with customized training sessions designed specifically for your body, goals, and schedule. Every workout is optimized for maximum results.',
      price: '$150',
      priceUnit: 'per session',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Personalized workout plans',
        'Real-time form correction',
        'Progress tracking & analysis',
        'Flexible scheduling',
        'Nutrition guidance included',
        'Direct message support'
      ]
    },
    {
      title: 'ONLINE COACHING',
      category: 'Remote Training',
      description: 'Train anywhere in the world with our comprehensive online coaching program. Perfect for busy professionals who need flexibility without sacrificing results.',
      price: '$199',
      priceUnit: 'per month',
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Custom training programs',
        'Video workout library',
        'Weekly check-ins',
        'Mobile app access',
        'Community support',
        '24/7 coach messaging'
      ]
    },
    {
      title: 'NUTRITION COACHING',
      category: 'Diet & Lifestyle',
      description: 'Transform your relationship with food. Our evidence-based nutrition coaching helps you fuel your body properly for optimal performance and sustainable results.',
      price: '$129',
      priceUnit: 'per month',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Personalized meal plans',
        'Macro tracking guidance',
        'Supplement recommendations',
        'Weekly nutrition calls',
        'Recipe database access',
        'Lifestyle coaching'
      ]
    },
    {
      title: 'TRANSFORMATION PACKAGE',
      category: 'Complete Program',
      description: 'The ultimate all-in-one package combining personal training, nutrition coaching, and lifestyle optimization for those serious about complete transformation.',
      price: '$399',
      priceUnit: 'per month',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        'All personal training benefits',
        'All nutrition coaching benefits',
        'Priority scheduling',
        'Monthly assessments',
        'Mindset coaching',
        'VIP support access'
      ]
    }
  ];

  comparisonPlans = [
    { name: 'Personal Training', popular: false },
    { name: 'Online Coaching', popular: true },
    { name: 'Nutrition Coaching', popular: false },
    { name: 'Transformation', popular: false }
  ];

  comparisonFeatures: Array<{ name: string; values: Record<string, boolean | string> }> = [
    { name: 'Custom Workout Plans', values: { 'Personal Training': true, 'Online Coaching': true, 'Nutrition Coaching': false, 'Transformation': true } },
    { name: 'In-Person Sessions', values: { 'Personal Training': true, 'Online Coaching': false, 'Nutrition Coaching': false, 'Transformation': true } },
    { name: 'Nutrition Guidance', values: { 'Personal Training': 'Basic', 'Online Coaching': 'Basic', 'Nutrition Coaching': true, 'Transformation': true } },
    { name: 'Video Library Access', values: { 'Personal Training': true, 'Online Coaching': true, 'Nutrition Coaching': false, 'Transformation': true } },
    { name: 'Weekly Check-ins', values: { 'Personal Training': true, 'Online Coaching': true, 'Nutrition Coaching': true, 'Transformation': true } },
    { name: 'Mindset Coaching', values: { 'Personal Training': false, 'Online Coaching': false, 'Nutrition Coaching': false, 'Transformation': true } },
    { name: 'Priority Support', values: { 'Personal Training': false, 'Online Coaching': false, 'Nutrition Coaching': false, 'Transformation': true } }
  ];

  faqs = [
    {
      question: 'How do I know which program is right for me?',
      answer: 'We offer a free consultation to assess your goals, fitness level, and lifestyle. This helps us recommend the perfect program for your specific needs.',
      open: false
    },
    {
      question: 'Can I switch programs if my needs change?',
      answer: 'Absolutely! We understand that goals evolve. You can upgrade, downgrade, or switch programs at any time with no penalties.',
      open: false
    },
    {
      question: 'What if I am a complete beginner?',
      answer: 'All our programs are designed to meet you where you are. Whether you have never worked out before or you are an experienced athlete, we adapt our approach to your level.',
      open: false
    },
    {
      question: 'How soon will I see results?',
      answer: 'Most clients start noticing changes within 2-4 weeks. However, sustainable transformation takes time. We focus on building habits that lead to lasting results.',
      open: false
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 100% satisfaction guarantee for the first 30 days. If you are not completely satisfied with your program, we will refund your investment.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
