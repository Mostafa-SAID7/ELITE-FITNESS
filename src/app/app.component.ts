import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

import { HeaderComponent, FooterComponent } from '@shared/components/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    // Scroll to top on every route navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Scroll to top with smooth behavior
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        // Update canonical URL
        this.updateCanonicalUrl(event.urlAfterRedirects);
      });
  }

  private updateCanonicalUrl(url: string): void {
    // Remove existing canonical tag
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical tag with current URL
    const canonicalUrl = `https://hitegypt.com${url === '/' ? '' : url}`;
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);

    // Update OG URL
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
  }
}
