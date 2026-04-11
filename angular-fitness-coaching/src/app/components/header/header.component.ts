import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TuiButton, TuiIcon],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class.bg-dark/95]="isScrolled()"
      [class.backdrop-blur-lg]="isScrolled()"
      [class.border-b]="isScrolled()"
      [class.border-white/10]="isScrolled()"
    >
      <nav class="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center
                        transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              <span class="font-display text-2xl text-white">E</span>
            </div>
            <span class="font-display text-2xl tracking-wider hidden sm:block">ELITE FITNESS</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-8">
            @for (link of navLinks; track link.path) {
              <a 
                [routerLink]="link.path"
                routerLinkActive="text-primary-500"
                [routerLinkActiveOptions]="{ exact: link.exact }"
                class="text-white/80 hover:text-primary-500 transition-colors duration-300 font-medium
                       relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                       after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {{ link.label }}
              </a>
            }
          </div>

          <!-- CTA Button (Desktop) -->
          <div class="hidden lg:block">
            <a routerLink="/contact" class="btn-primary inline-block">
              Start Your Journey
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="lg:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                   transition-all duration-300 hover:bg-primary-600"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="isMobileMenuOpen()"
            aria-label="Toggle menu"
          >
            <div class="w-6 h-5 relative flex flex-col justify-between">
              <span 
                class="w-full h-0.5 bg-white transition-all duration-300 origin-left"
                [class.rotate-45]="isMobileMenuOpen()"
                [class.translate-y-0.5]="isMobileMenuOpen()"
              ></span>
              <span 
                class="w-full h-0.5 bg-white transition-all duration-300"
                [class.opacity-0]="isMobileMenuOpen()"
              ></span>
              <span 
                class="w-full h-0.5 bg-white transition-all duration-300 origin-left"
                [class.-rotate-45]="isMobileMenuOpen()"
                [class.-translate-y-0.5]="isMobileMenuOpen()"
              ></span>
            </div>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div 
        class="lg:hidden absolute top-full left-0 right-0 bg-dark/98 backdrop-blur-xl border-b border-white/10
               transition-all duration-500 overflow-hidden"
        [class.max-h-0]="!isMobileMenuOpen()"
        [class.max-h-96]="isMobileMenuOpen()"
        [class.opacity-0]="!isMobileMenuOpen()"
        [class.opacity-100]="isMobileMenuOpen()"
      >
        <div class="container-max mx-auto px-4 py-6 flex flex-col gap-4">
          @for (link of navLinks; track link.path) {
            <a 
              [routerLink]="link.path"
              routerLinkActive="text-primary-500"
              [routerLinkActiveOptions]="{ exact: link.exact }"
              class="text-lg text-white/80 hover:text-primary-500 transition-colors duration-300 py-2"
              (click)="closeMobileMenu()"
            >
              {{ link.label }}
            </a>
          }
          <a 
            routerLink="/contact" 
            class="btn-primary text-center mt-4"
            (click)="closeMobileMenu()"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/services', label: 'Services', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
