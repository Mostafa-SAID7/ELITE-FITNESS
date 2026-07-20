import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-dark pt-32 pb-24">
      <div class="container-max mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <!-- Header -->
        <div class="mb-12">
          <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">Legal</span>
          <h1 class="font-display text-5xl sm:text-6xl mb-4">PRIVACY <span class="text-gradient">POLICY</span></h1>
          <p class="text-white/50 text-sm">Last updated: January 1, 2025</p>
        </div>

        <!-- Content -->
        <div class="prose-dark space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 class="font-display text-2xl text-white mb-4">1. WHO WE ARE</h2>
            <p>HIT Egypt ("we", "our", "us") is a fitness services company established in 2014, headquartered at Heliopolis Sporting Club, Cairo, Egypt. This Privacy Policy explains how we collect, use, disclose and protect information about you when you use our website at <span class="text-primary-400">hitegypt.com</span> or interact with our services.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">2. INFORMATION WE COLLECT</h2>
            <p class="mb-4">We collect information you provide directly to us, including:</p>
            <ul class="space-y-2 list-none">
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span><strong class="text-white">Contact details</strong> — first name, last name, email address, and phone number when you fill in our contact or booking forms.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span><strong class="text-white">Location preference</strong> — the HIT Egypt venue you are interested in.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span><strong class="text-white">Communications</strong> — any messages or comments you send us through the contact form or social media.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span><strong class="text-white">Usage data</strong> — pages visited, time spent, browser type, and IP address collected automatically via cookies and analytics tools.</span></li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">3. HOW WE USE YOUR INFORMATION</h2>
            <p class="mb-4">We use the information we collect to:</p>
            <ul class="space-y-2 list-none">
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Respond to your inquiries and direct you to the right membership package.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Process bookings and manage your membership.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Send you updates about programs, schedules, and promotions (where you have opted in).</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Improve our website and services through analytics.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Comply with legal obligations.</span></li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">4. SHARING YOUR INFORMATION</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and delivering our services (e.g. payment processors, email platforms), subject to confidentiality agreements. We may also disclose information if required by law or to protect the rights and safety of HIT Egypt and its members.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">5. DATA RETENTION</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Contact form submissions are kept for up to 2 years. You may request deletion at any time by contacting us.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">6. YOUR RIGHTS</h2>
            <p class="mb-4">You have the right to:</p>
            <ul class="space-y-2 list-none">
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Access the personal data we hold about you.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Request correction of inaccurate data.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Request deletion of your data ("right to be forgotten").</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Withdraw consent to marketing communications at any time.</span></li>
            </ul>
            <p class="mt-4">To exercise any of these rights, email us at <span class="text-primary-400">info&#64;hitegypt.com</span>.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">7. COOKIES</h2>
            <p>We use cookies to enhance your experience on our website. For full details on what cookies we use and how to manage them, please read our <a routerLink="/cookie-policy" class="text-primary-400 hover:text-primary-300 transition-colors">Cookie Policy</a>.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">8. SECURITY</h2>
            <p>We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, loss or misuse. However, no internet transmission is completely secure and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">9. CHANGES TO THIS POLICY</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our website after changes are posted constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">10. CONTACT US</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div class="mt-4 p-6 glass-card rounded-2xl space-y-2">
              <p><span class="text-white/50">Email:</span> <span class="text-primary-400">info&#64;hitegypt.com</span></p>
              <p><span class="text-white/50">Address:</span> Heliopolis Sporting Club, Merghani St, Cairo, Egypt</p>
              <p><span class="text-white/50">Instagram:</span> <a href="https://www.instagram.com/hitegypt/" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 transition-colors">&#64;hitegypt</a></p>
            </div>
          </section>

        </div>

        <!-- Back link -->
        <div class="mt-16 pt-8 border-t border-white/10 flex gap-6 text-sm">
          <a routerLink="/" class="text-white/50 hover:text-primary-400 transition-colors">← Back to Home</a>
          <a routerLink="/terms-of-service" class="text-white/50 hover:text-primary-400 transition-colors">Terms of Service</a>
          <a routerLink="/cookie-policy" class="text-white/50 hover:text-primary-400 transition-colors">Cookie Policy</a>
        </div>

      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class PrivacyPolicyComponent {}
