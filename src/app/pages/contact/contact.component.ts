import { Component, signal, HostListener, ElementRef } from '@angular/core';
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
                OUR PACKAGES ARE JUST
                <span class="text-gradient">A FEW TAPS AWAY</span>
              </h1>
              <p class="text-white/60 text-lg mb-12 leading-relaxed">
                Fill in this quick form and you'll be directed to our packages. If you have further questions, reach us through our social media platforms.
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
                    Thank you for reaching out! The HIT Egypt team will be in touch with your package options soon.
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

                    <!-- Location custom dropdown -->
                    <div class="relative" #dropdownRef>
                      <label class="block text-white/60 text-sm mb-2">Choose your desired location *</label>

                      <!-- Trigger -->
                      <button
                        type="button"
                        (click)="toggleDropdown()"
                        [class]="'w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 cursor-pointer text-left ' +
                          (dropdownOpen()
                            ? 'border-primary-500 ring-1 ring-primary-500 bg-white/5'
                            : (contactForm.get(\'goal\')?.invalid && contactForm.get(\'goal\')?.touched
                                ? 'border-primary-500/60 bg-white/5'
                                : 'border-white/10 bg-white/5 hover:border-white/30'))"
                        [attr.aria-expanded]="dropdownOpen()"
                      >
                        <span [class]="selectedLocation() ? 'text-white' : 'text-white/30'">
                          {{ selectedLocation() || 'Select your location' }}
                        </span>
                        <svg
                          class="w-4 h-4 text-white/50 flex-shrink-0 transition-transform duration-300"
                          [class.rotate-180]="dropdownOpen()"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <!-- Options panel -->
                      @if (dropdownOpen()) {
                        <div
                          class="absolute z-50 left-0 right-0 mt-2 rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                          style="background: #1a1a1a;"
                        >
                          <ul role="listbox" class="py-1 max-h-64 overflow-y-auto custom-scrollbar">
                            @for (goal of goals; track goal) {
                              <li
                                role="option"
                                [attr.aria-selected]="selectedLocation() === goal"
                                (click)="selectLocation(goal)"
                                class="flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-150 text-sm group"
                                [class]="selectedLocation() === goal
                                  ? 'bg-primary-600/20 text-primary-400'
                                  : 'text-white/80 hover:bg-white/5 hover:text-white'"
                              >
                                <span>{{ goal }}</span>
                                @if (selectedLocation() === goal) {
                                  <svg class="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                                  </svg>
                                }
                              </li>
                            }
                          </ul>
                        </div>
                      }

                      @if (contactForm.get('goal')?.invalid && contactForm.get('goal')?.touched) {
                        <p class="text-primary-500 text-sm mt-2">Please select a location</p>
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
            <h3 class="font-display text-2xl mb-2">OUR LOCATIONS</h3>
            <p class="text-white/60">8 venues across Cairo, Egypt — and expanding</p>
          </div>
        </div>
        <!-- Placeholder for actual map integration -->
        <div class="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none"></div>
      </section>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.15);
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(239,68,68,0.5);
    }
  `]
})
export class ContactComponent {
  private fb       = new FormBuilder();
  private elRef: ElementRef;

  constructor(elRef: ElementRef) { this.elRef = elRef; }

  formSubmitted   = signal(false);
  isSubmitting    = signal(false);
  dropdownOpen    = signal(false);
  selectedLocation = signal('');
  pageData        = contactPageData;

  contactForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    email:     ['', [Validators.required, Validators.email]],
    phone:     [''],
    goal:      ['', Validators.required],
    message:   ['']
  });

  goals        = contactPageData.goals;
  contactInfo  = contactPageData.contactInfo;
  socialLinks  = contactPageData.socialLinks;

  toggleDropdown() {
    this.dropdownOpen.update(v => !v);
    if (!this.dropdownOpen()) {
      this.contactForm.get('goal')?.markAsTouched();
    }
  }

  selectLocation(location: string) {
    this.selectedLocation.set(location);
    this.contactForm.get('goal')?.setValue(location);
    this.contactForm.get('goal')?.markAsTouched();
    this.dropdownOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownOpen() && !this.elRef.nativeElement.contains(event.target)) {
      this.dropdownOpen.set(false);
      this.contactForm.get('goal')?.markAsTouched();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.dropdownOpen()) {
      this.dropdownOpen.set(false);
      this.contactForm.get('goal')?.markAsTouched();
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.formSubmitted.set(true);
      }, 1500);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.selectedLocation.set('');
    this.formSubmitted.set(false);
  }
}
