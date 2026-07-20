import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STATS_DATA } from '@core/models/stats.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html'
})
export class StatsComponent {
  stats = STATS_DATA;
}
