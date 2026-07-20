import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ABOUT_PAGE_DATA } from '@features/about/models/about-page.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  pageData = ABOUT_PAGE_DATA;
  pillars = ABOUT_PAGE_DATA.philosophy.pillars;
  certifications = ABOUT_PAGE_DATA.certifications.items;
}
