import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  template: `
    <div class="min-h-screen bg-dark flex flex-col">
      <header class="fixed top-0 left-0 right-0 z-50 bg-dark/95 border-b border-white/10">
        <nav class="container-max mx-auto px-4 h-20 flex items-center justify-between">
          <a routerLink="/" class="font-display text-2xl text-white">ELITE FITNESS</a>
          <div class="hidden lg:flex gap-8">
            <a routerLink="/" class="text-white/80 hover:text-primary-500">Home</a>
            <a routerLink="/about" class="text-white/80 hover:text-primary-500">About</a>
            <a routerLink="/services" class="text-white/80 hover:text-primary-500">Services</a>
            <a routerLink="/contact" class="text-white/80 hover:text-primary-500">Contact</a>
          </div>
          <a routerLink="/contact" class="btn-primary hidden lg:inline-block">Start Your Journey</a>
        </nav>
      </header>
      <main class="flex-1 pt-20">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {}
