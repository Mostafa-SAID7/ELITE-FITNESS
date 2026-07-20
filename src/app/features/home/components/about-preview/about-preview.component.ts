import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ABOUT_DATA } from '@features/about/models/about.model';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-preview.component.html'
})
export class AboutPreviewComponent {
  aboutData = ABOUT_DATA;
}
