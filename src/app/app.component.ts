import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, FooterComponent } from '@shared/components/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen bg-black flex flex-col">
      <app-header />
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
