import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-dark/95 backdrop-blur-sm">
      <nav class="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
              <span class="font-display text-xl text-white font-black">HIT</span>
            </div>
            <span class="font-display text-2xl tracking-wider hidden sm:block text-white">HIT EGYPT</span>
          </a>
          
          <div class="hidden lg:flex items-center gap-8">
            <a *ngFor="let link of navLinks" 
               [routerLink]="link.path" 
               routerLinkActive="!text-white/80 text-primary-500" 
               [routerLinkActiveOptions]="{ exact: link.exact }"
               class="text-white/80 hover:text-primary-500 transition-colors duration-300 font-medium">
              {{ link.label }}
            </a>
          </div>
          
          <div class="hidden lg:block">
            <a routerLink="/contact" class="btn-primary">Book a Spot</a>
          </div>
          
          <button class="lg:hidden w-12 h-12 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors" (click)="toggleMobileMenu()">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      <div *ngIf="isMobileMenuOpen()" class="lg:hidden bg-dark/98 backdrop-blur-lg border-t border-white/10">
        <div class="container-max mx-auto px-4 py-6 flex flex-col gap-4">
          <a *ngFor="let link of navLinks" 
             [routerLink]="link.path" 
             routerLinkActive="!text-white/80 text-primary-500" 
             [routerLinkActiveOptions]="{ exact: link.exact }"
             class="text-lg text-white/80 hover:text-primary-500 py-2 transition-colors duration-300 font-medium"
             (click)="closeMobileMenu()">
            {{ link.label }}
          </a>
          <a routerLink="/contact" 
             class="btn-primary text-center mt-4"
             (click)="closeMobileMenu()">
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
