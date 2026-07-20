import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-dark pt-32 pb-24">
      <div class="container-max mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        <!-- Header -->
        <div class="mb-12">
          <span class="inline-block text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">Legal</span>
          <h1 class="font-display text-5xl sm:text-6xl mb-4">TERMS OF <span class="text-gradient">SERVICE</span></h1>
          <p class="text-white/50 text-sm">Last updated: January 1, 2025</p>
        </div>

        <!-- Content -->
        <div class="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 class="font-display text-2xl text-white mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p>By accessing or using the HIT Egypt website (<span class="text-primary-400">hitegypt.com</span>) or any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. HIT Egypt reserves the right to update these terms at any time, and continued use constitutes acceptance of any changes.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">2. OUR SERVICES</h2>
            <p class="mb-4">HIT Egypt provides fitness training services including, but not limited to:</p>
            <ul class="space-y-2 list-none">
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Group fitness sessions (Hyper45, Hyper60, Sweat45, HIT60, Perform, Prymal, and more)</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Specialty sessions (Calisthenics, Yoga, Pilates, Sculpt, Teens)</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Transformation programs (21-Day, Fabfit, BUILD+, Hybrid Rockstar)</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Personal training, online coaching, and nutrition programs</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Corporate wellness programs</span></li>
            </ul>
            <p class="mt-4">Services are delivered across our 8 Cairo venues and seasonal North Coast locations. Session availability, pricing, and schedules are subject to change without notice.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">3. MEMBERSHIP & BOOKINGS</h2>
            <p class="mb-4">By booking a session or purchasing a package, you agree that:</p>
            <ul class="space-y-2 list-none">
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>You are at least 16 years of age, or have parental/guardian consent.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>You are physically fit to participate in fitness activities, or have obtained medical clearance.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>You will inform our coaches of any injury, medical condition, or physical limitation before participating.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Packages and sessions are non-transferable unless otherwise stated.</span></li>
              <li class="flex gap-3"><span class="text-primary-500 mt-1">→</span><span>Late cancellations or no-shows may result in session forfeiture according to our cancellation policy communicated at time of booking.</span></li>
            </ul>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">4. PAYMENT & REFUNDS</h2>
            <p>All payments are due at time of booking unless otherwise arranged. HIT Egypt accepts payment via methods listed at point of sale, including instalment options through partner providers (valU, Emirates NBD, Sympl, NBK). Refund eligibility depends on the package type and is assessed on a case-by-case basis. Contact <span class="text-primary-400">info&#64;hitegypt.com</span> for any billing disputes.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">5. HEALTH & SAFETY</h2>
            <p>Participation in physical fitness activities carries inherent risks. By using our services, you acknowledge these risks and agree to follow all safety instructions provided by HIT Egypt coaches and staff. HIT Egypt is not liable for injuries resulting from failure to follow instructions, pre-existing medical conditions not disclosed prior to participation, or use of equipment contrary to guidance provided.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">6. INTELLECTUAL PROPERTY</h2>
            <p>All content on this website — including the HIT Egypt name, logo, program names, text, images, and design — is the property of HIT Egypt and protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">7. PHOTOGRAPHY & MEDIA</h2>
            <p>HIT Egypt may photograph or film sessions for marketing purposes. By attending our sessions you consent to being photographed or filmed. If you do not wish to appear in marketing materials, please notify our staff before the session begins.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">8. LIMITATION OF LIABILITY</h2>
            <p>To the fullest extent permitted by applicable law, HIT Egypt shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services, including but not limited to loss of data, loss of profits, personal injury, or property damage.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">9. GOVERNING LAW</h2>
            <p>These Terms of Service are governed by the laws of the Arab Republic of Egypt. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Cairo, Egypt.</p>
          </section>

          <section>
            <h2 class="font-display text-2xl text-white mb-4">10. CONTACT</h2>
            <p>For questions about these terms, contact us at:</p>
            <div class="mt-4 p-6 glass-card rounded-2xl space-y-2">
              <p><span class="text-white/50">Email:</span> <span class="text-primary-400">info&#64;hitegypt.com</span></p>
              <p><span class="text-white/50">Address:</span> Heliopolis Sporting Club, Merghani St, Cairo, Egypt</p>
            </div>
          </section>

        </div>

        <!-- Back link -->
        <div class="mt-16 pt-8 border-t border-white/10 flex gap-6 text-sm">
          <a routerLink="/" class="text-white/50 hover:text-primary-400 transition-colors">← Back to Home</a>
          <a routerLink="/privacy-policy" class="text-white/50 hover:text-primary-400 transition-colors">Privacy Policy</a>
          <a routerLink="/cookie-policy" class="text-white/50 hover:text-primary-400 transition-colors">Cookie Policy</a>
        </div>

      </div>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class TermsOfServiceComponent {}
