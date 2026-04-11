import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, HeaderComponent, FooterComponent],
  template: `
    <tui-root>
      <div class="min-h-screen bg-dark flex flex-col">
        <app-header />
        <main class="flex-1">
          <router-outlet />
        </main>
        <app-footer />
      </div>
    </tui-root>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {}
