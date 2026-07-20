import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CTA_DATA } from '@features/home/models/home.model';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cta-section.component.html'
})
export class CtaSectionComponent {
  ctaData = CTA_DATA;
}
