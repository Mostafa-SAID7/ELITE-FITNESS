import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICES_DATA } from '@features/services/models/service.model';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-preview.component.html'
})
export class ServicesPreviewComponent {
  services = SERVICES_DATA;
}
