import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    NG_EVENT_PLUGINS,
  ],
}).catch((err) => console.error(err));
