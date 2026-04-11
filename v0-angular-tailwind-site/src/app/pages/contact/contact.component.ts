import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="section-padding bg-dark relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-72 h-72 bg-primary-600/5 rounded-full blur-3xl"></div>
        </div>

        <div class="container-max mx-auto relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Info -->
            <div>
              <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
                Contact Us
              </span>
              <h1 class="font-display text-5xl sm:text-6xl md:text-7xl mb-6">
                LET'S START YOUR 
                <span class="text-gradient">TRANSFORMATION</span>
              </h1>
              <p class="text-white/60 text-lg mb-12 leading-relaxed">
                Ready to take the first step? Fill out the form and I'll get back to you within 24 hours 
                to schedule your free consultation.
              </p>

              <!-- Contact Details -->
              <div class="space-y-6 mb-12">
                @for (item of contactInfo; track item.label) {
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path [attr.d]="item.icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-white/50 text-sm mb-1">{{ item.label }}</div>
                      <div class="text-white font-medium">{{ item.value }}</div>
                    </div>
                  </div>
                }
              </div>

              <!-- Social Links -->
              <div>
                <div class="text-white/50 text-sm mb-4">Follow Us</div>
                <div class="flex gap-4">
                  @for (social of socialLinks; track social.name) {
                    <a 
                      [href]="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                             transition-all duration-300 hover:bg-primary-600 hover:scale-110"
                      [attr.aria-label]="social.name"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path [attr.d]="social.icon" />
                      </svg>
                    </a>
                  }
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="glass-card p-8 md:p-12">
              @if (formSubmitted()) {
                <div class="text-center py-12">
                  <div class="w-20 h-20 rounded-full bg-primary-600/20 flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 class="font-display text-3xl mb-4">MESSAGE SENT!</h3>
                  <p class="text-white/60 mb-8">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button 
                    class="btn-secondary"
                    (click)="resetForm()"
                  >
                    Send Another Message
                  </button>
                </div>
              } @else {
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                  <h2 class="font-display text-2xl mb-8">GET IN TOUCH</h2>
                  
                  <div class="space-y-6">
                    <!-- Name Fields -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-white/60 text-sm mb-2">First Name *</label>
                        <input 
                          type="text"
                          formControlName="firstName"
                          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                                 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500
                                 transition-all duration-300 placeholder:text-white/30"
                          placeholder="John"
                        >
                        @if (contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched) {
                          <p class="text-primary-500 text-sm mt-2">First name is required</p>
                        }
                      </div>
                      <div>
                        <label class="block text-white/60 text-sm mb-2">Last Name *</label>
                        <input 
                          type="text"
                          formControlName="lastName"
                          class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                                 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500
                                 transition-all duration-300 placeholder:text-white/30"
                          placeholder="Doe"
                        >
                        @if (contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched) {
                          <p class="text-primary-500 text-sm mt-2">Last name is required</p>
                        }
                      </div>
                    </div>

                    <!-- Email -->
                    <div>
                      <label class="block text-white/60 text-sm mb-2">Email *</label>
                      <input 
                        type="email"
                        formControlName="email"
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500
                               transition-all duration-300 placeholder:text-white/30"
                        placeholder="john&#64;example.com"
                      >
                      @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                        <p class="text-primary-500 text-sm mt-2">Please enter a valid email</p>
                      }
                    </div>

                    <!-- Phone -->
                    <div>
                      <label class="block text-white/60 text-sm mb-2">Phone</label>
                      <input 
                        type="tel"
                        formControlName="phone"
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500
                               transition-all duration-300 placeholder:text-white/30"
                        placeholder="+1 (123) 456-7890"
                      >
                    </div>

                    <!-- Goal -->
                    <div>
                      <label class="block text-white/60 text-sm mb-2">What is your primary goal? *</label>
                      <select 
                        formControlName="goal"
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500
                               transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" class="bg-dark-100">Select your goal</option>
                        @for (goal of goals; track goal) {
                          <option [value]="goal" class="bg-dark-100">{{ goal }}</option>
                        }
                      </select>
                      @if (contactForm.get('goal')?.invalid && contactForm.get('goal')?.touched) {
                        <p class="text-primary-500 text-sm mt-2">Please select a goal</p>
                      }
                    </div>

                    <!-- Message -->
                    <div>
                      <label class="block text-white/60 text-sm mb-2">Tell me more about your goals</label>
                      <textarea 
                        formControlName="message"
                        rows="4"
                        class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500
                               transition-all duration-300 placeholder:text-white/30 resize-none"
                        placeholder="Share any relevant details about your fitness journey..."
                      ></textarea>
                    </div>

                    <!-- Submit Button -->
                    <button 
                      type="submit"
                      class="w-full btn-primary flex items-center justify-center gap-2"
                      [disabled]="contactForm.invalid || isSubmitting()"
                    >
                      @if (isSubmitting()) {
                        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      } @else {
                        <span>Send Message</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      }
                    </button>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="h-[400px] bg-dark-100 relative">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="font-display text-2xl mb-2">VISIT OUR GYM</h3>
            <p class="text-white/60">123 Fitness Street, Los Angeles, CA 90001</p>
          </div>
        </div>
        <!-- Placeholder for actual map integration -->
        <div class="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none"></div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    select option {
      background-color: #111111;
      color: white;
    }
  `]
})
export class ContactComponent {
  private fb = new FormBuilder();
  
  formSubmitted = signal(false);
  isSubmitting = signal(false);

  contactForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    goal: ['', Validators.required],
    message: ['']
  });

  goals = [
    'Lose Weight',
    'Build Muscle',
    'Improve Athletic Performance',
    'General Fitness',
    'Nutrition Coaching',
    'Post-Injury Recovery',
    'Other'
  ];

  contactInfo = [
    {
      label: 'Email',
      value: 'info@elitefitness.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      label: 'Phone',
      value: '+1 (123) 456-7890',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      label: 'Location',
      value: '123 Fitness Street, Los Angeles, CA 90001',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      label: 'Hours',
      value: 'Mon - Sat: 6AM - 9PM',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    }
  ];

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.formSubmitted.set(true);
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.formSubmitted.set(false);
  }
}
