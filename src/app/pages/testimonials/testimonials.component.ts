import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testimonialsData } from '../../data/testimonials.data';

@Component({
  selector: 'app-testimonials-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html'
})
export class TestimonialsPageComponent {
  testimonialsData = testimonialsData;
  selectedLocation = signal<string | null>(null);
  searchQuery = signal<string>('');
  showBeforeAfter: { [key: string]: boolean } = {};

  // Filtered testimonials based on location and search query
  filteredTestimonials = computed(() => {
    let result = this.testimonialsData;

    // Filter by location
    const location = this.selectedLocation();
    if (location) {
      result = result.filter(t => t.location === location);
    }

    // Filter by search query
    const query = this.searchQuery().toLowerCase();
    if (query) {
      result = result.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.program.toLowerCase().includes(query) ||
        t.quote.toLowerCase().includes(query) ||
        t.location.toLowerCase().includes(query)
      );
    }

    return result;
  });

  // Get unique locations for filter
  uniqueLocations = computed(() => {
    const locations = [...new Set(this.testimonialsData.map(t => t.location))];
    return locations.sort();
  });

  filterByLocation(location: string | null) {
    this.selectedLocation.set(location);
  }

  onSearchChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }

  clearFilters() {
    this.selectedLocation.set(null);
    this.searchQuery.set('');
  }

  toggleBeforeAfter(name: string) {
    this.showBeforeAfter[name] = !this.showBeforeAfter[name];
  }
}
