import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FOOTER_DATA } from '@core/models/footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  quickLinks = FOOTER_DATA.quickLinks;
  services = FOOTER_DATA.services;
  socialLinks = FOOTER_DATA.socialLinks;
  contact = FOOTER_DATA.contact;
}
