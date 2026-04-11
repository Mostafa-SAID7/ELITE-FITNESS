import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-dark-100 border-t border-white/10">
      <div class="container-max mx-auto section-padding">
        <!-- Main Footer -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <a routerLink="/" class="flex items-center gap-3 mb-6 group">
              <div class="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center
                          transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                <span class="font-display text-2xl text-white">E</span>
              </div>
              <span class="font-display text-xl tracking-wider">ELITE FITNESS</span>
            </a>
            <p class="text-white/60 mb-6 leading-relaxed">
              Transform your body and mind with personalized coaching designed for real results.
            </p>
            <!-- Social Links -->
            <div class="flex gap-4">
              @for (social of socialLinks; track social.name) {
                <a 
                  [href]="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
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

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-lg mb-6">Quick Links</h3>
            <ul class="space-y-4">
              @for (link of quickLinks; track link.path) {
                <li>
                  <a 
                    [routerLink]="link.path"
                    class="text-white/60 hover:text-primary-500 transition-colors duration-300"
                  >
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="font-semibold text-lg mb-6">Services</h3>
            <ul class="space-y-4">
              @for (service of services; track service) {
                <li>
                  <a 
                    routerLink="/services"
                    class="text-white/60 hover:text-primary-500 transition-colors duration-300"
                  >
                    {{ service }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-semibold text-lg mb-6">Contact</h3>
            <ul class="space-y-4 text-white/60">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-1 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Fitness Street<br>Los Angeles, CA 90001</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info&#64;elitefitness.com" class="hover:text-primary-500 transition-colors">
                  info&#64;elitefitness.com
                </a>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+11234567890" class="hover:text-primary-500 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white/40 text-sm">
            {{ currentYear }} Elite Fitness Coaching. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  services = [
    'Personal Training',
    'Nutrition Coaching',
    'Online Programs',
    'Group Classes',
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
    },
  ];
}
