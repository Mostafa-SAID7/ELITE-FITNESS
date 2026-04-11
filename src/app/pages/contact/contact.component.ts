import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactPageData } from '../../data/contact-page.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  template: `
    <div>
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
                        style="background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 4 5&quot;><path fill=&quot;%23ffffff&quot; d=&quot;M2 0L0 2h4zm0 5L0 3h4z&quot;/></svg>'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 0.75rem;"
                      >
                        <option value="" disabled selected class="text-white/40">Select your goal</option>
                        @for (goal of goals; track goal) {
                          <option [value]="goal" class="bg-dark text-white">{{ goal }}</option>
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
  pageData = contactPageData;

  contactForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    goal: ['', Validators.required],
    message: ['']
  });

  goals = contactPageData.goals;
  contactInfo = contactPageData.contactInfo;
  socialLinks = contactPageData.socialLinks;

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
