import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { footerData } from '../../data/footer.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-black border-t border-white/10">
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
                <span>{{ contact.address }}</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a [href]="'mailto:' + contact.email" class="hover:text-primary-500 transition-colors">
                  {{ contact.email }}
                </a>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a [href]="'tel:' + contact.phone" class="hover:text-primary-500 transition-colors">
                  {{ contact.phone }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white/40 text-sm">
            {{ currentYear }} HIT Egypt. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <a routerLink="/privacy-policy" class="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a routerLink="/terms-of-service" class="text-white/40 hover:text-white transition-colors">Terms of Service</a>
            <a routerLink="/cookie-policy" class="text-white/40 hover:text-white transition-colors">Cookie Policy</a>
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
  quickLinks = footerData.quickLinks;
  services = footerData.services;
  socialLinks = footerData.socialLinks;
  contact = footerData.contact;
}
