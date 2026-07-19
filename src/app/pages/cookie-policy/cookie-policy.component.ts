import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-dark pt-32 pb-24">
      <div class="container-max mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <!-- Header -->
        <div class="mb-12">
          <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">Legal</span>
          <h1 class="font-display text-5xl sm:text-6xl mb-4">COOKIE <span class="text-gradient">POLICY</span></h1>
          <p class="text-white/50 text-sm">Last updated: January 1, 2025</p>
        </div>

        <!-- Content -->
        <div class="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 class="font-display text-2xl text-white mb-4">1. WHAT ARE COOKIES</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work properly, improve user experience, and provide information to website owners. This Cookie Policy explains what cookies we use on the HIT Egypt website, why we use them, and how you can control them.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">2. COOKIES WE USE</h2>

            <div class="space-y-6 mt-4">

              <div class="p-6 glass-card rounded-2xl">
                <div class="flex items-center gap-3 mb-3">
                  <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full uppercase tracking-wider">Essential</span>
                  <h3 class="font-display text-lg text-white">Strictly Necessary Cookies</h3>
                </div>
                <p class="text-sm mb-3">These cookies are required for the website to function. They cannot be disabled.</p>
                <ul class="space-y-1 text-sm list-none">
                  <li class="flex gap-2"><span class="text-primary-500">→</span><span><strong class="text-white">Session cookies</strong> — maintain your session as you navigate between pages.</span></li>
                  <li class="flex gap-2"><span class="text-primary-500">→</span><span><strong class="text-white">Security cookies</strong> — protect against cross-site request forgery and other threats.</span></li>
                </ul>
              </div>

              <div class="p-6 glass-card rounded-2xl">
                <div class="flex items-center gap-3 mb-3">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">Analytics</span>
                  <h3 class="font-display text-lg text-white">Analytics & Performance Cookies</h3>
                </div>
                <p class="text-sm mb-3">These cookies help us understand how visitors interact with our website so we can improve it.</p>
                <ul class="space-y-1 text-sm list-none">
                  <li class="flex gap-2"><span class="text-primary-500">→</span><span><strong class="text-white">Google Analytics</strong> — tracks page views, session duration, and referral sources. Data is anonymised and aggregated.</span></li>
                  <li class="flex gap-2"><span class="text-primary-500">→</span><span><strong class="text-white">Performance monitoring</strong> — identifies slow-loading pages and errors.</span></li>
                </ul>
              </div>

              <div class="p-6 glass-card rounded-2xl">
                <div class="flex items-center gap-3 mb-3">
                  <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full uppercase tracking-wider">Functional</span>
                  <h3 class="font-display text-lg text-white">Functional Cookies</h3>
                </div>
                <p class="text-sm mb-3">These cookies enable enhanced functionality and personalisation.</p>
                <ul class="space-y-1 text-sm list-none">
                  <li class="flex gap-2"><span class="text-primary-500">→</span><span><strong class="text-white">Preference cookies</strong> — remember your settings such as language or location preference.</span></li>
                </ul>
              </div>

              <div class="p-6 glass-card rounded-2xl">
                <div class="flex items-center gap-3 mb-3">
                  <span class="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full uppercase tracking-wider">Marketing</span>
                  <h3 class="font-display text-lg text-white">Marketing & Social Media Cookies</h3>
                </div>
                <p class="text-sm mb-3">These cookies are set by social media platforms and advertising partners to show you relevant content.</p>
                <ul class="space-y-1 text-sm list-none">
                  <li class="flex gap-2"><span class="text-primary-500">→</span><span><strong class="text-white">Facebook Pixel</strong> — tracks conversions from our Facebook and Instagram ads.</span></li>
                  <li class="flex gap-2"><span class="text-primary-500">→</span><span><strong class="text-white">Social sharing buttons</strong> — enable sharing content from our site to your social media profiles.</span></li>
                </ul>
              </div>

            </div>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">3. HOW TO MANAGE COOKIES</h2>
            <p class="mb-4">You can control and manage cookies in several ways:</p>
            <ul class="space-y-2 list-none">
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span><strong class="text-white">Browser settings</strong> — most browsers let you refuse or delete cookies. See your browser's help documentation for instructions (Chrome, Firefox, Safari, Edge).</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span><strong class="text-white">Google Analytics opt-out</strong> — install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 transition-colors">Google Analytics Opt-out Browser Add-on</a>.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span><strong class="text-white">Facebook</strong> — manage your ad preferences through <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 transition-colors">Facebook Ad Settings</a>.</span></li>
            </ul>
            <p class="mt-4">Please note that disabling certain cookies may affect the functionality of our website.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">4. THIRD-PARTY COOKIES</h2>
            <p>Some cookies on our site are set by third-party services. We do not control these cookies and they are governed by the privacy policies of the respective third parties. We encourage you to review their policies directly.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">5. UPDATES TO THIS POLICY</h2>
            <p>We may update this Cookie Policy as our services evolve or as laws change. The date at the top of this page reflects when the policy was last revised. Continued use of our website constitutes your acceptance of any updates.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">6. CONTACT</h2>
            <p>If you have questions about our use of cookies, please contact us:</p>
            <div class="mt-4 p-6 glass-card rounded-2xl space-y-2">
              <p><span class="text-white/50">Email:</span> <span class="text-primary-400">info&#64;hitegypt.com</span></p>
              <p><span class="text-white/50">Instagram:</span> <a href="https://www.instagram.com/hitegypt/" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 transition-colors">&#64;hitegypt</a></p>
            </div>
          </section>

        </div>

        <!-- Back link -->
        <div class="mt-16 pt-8 border-t border-white/10 flex gap-6 text-sm">
          <a routerLink="/" class="text-white/50 hover:text-primary-400 transition-colors">← Back to Home</a>
          <a routerLink="/privacy-policy" class="text-white/50 hover:text-primary-400 transition-colors">Privacy Policy</a>
          <a routerLink="/terms-of-service" class="text-white/50 hover:text-primary-400 transition-colors">Terms of Service</a>
        </div>

      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class CookiePolicyComponent {}
