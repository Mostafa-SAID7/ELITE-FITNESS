import { Component, signal, OnInit, OnDestroy, effect, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testimonialsData } from '../../data/testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  activeIndex = signal(0);
  allTestimonials = testimonialsData;
  selectedLocation = signal<string | null>(null);
  
  // Computed filtered testimonials based on selected location
  testimonials = computed(() => {
    const location = this.selectedLocation();
    if (!location) {
      return this.allTestimonials;
    }
    return this.allTestimonials.filter(t => t.location === location);
  });

  // Get unique locations for filter
  uniqueLocations = computed(() => {
    const locations = [...new Set(this.allTestimonials.map(t => t.location))];
    return locations.sort();
  });

  private autoAdvanceInterval: any;
  private isAutoAdvancing = true;
  private autoAdvanceDelay = 6000; // 6 seconds

  constructor() {
    // Pause auto-advance when user interacts
    effect(() => {
      this.activeIndex();
      this.pauseAutoAdvance();
      this.resumeAutoAdvanceAfterDelay();
    });
  }

  ngOnInit() {
    this.startAutoAdvance();
  }

  ngOnDestroy() {
    this.stopAutoAdvance();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prev();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;
      case 'Escape':
        event.preventDefault();
        this.isAutoAdvancing = !this.isAutoAdvancing;
        if (this.isAutoAdvancing) {
          this.startAutoAdvance();
        } else {
          this.stopAutoAdvance();
        }
        break;
    }
  }

  setActiveIndex(index: number) {
    this.activeIndex.set(index);
  }

  filterByLocation(location: string | null) {
    this.selectedLocation.set(location);
    this.activeIndex.set(0); // Reset to first testimonial when filtering
  }

  prev() {
    this.activeIndex.set(
      (this.activeIndex() - 1 + this.testimonials().length) % this.testimonials().length
    );
  }

  next() {
    this.activeIndex.set(
      (this.activeIndex() + 1) % this.testimonials().length
    );
  }

  private startAutoAdvance() {
    if (this.isAutoAdvancing && !this.autoAdvanceInterval) {
      this.autoAdvanceInterval = setInterval(() => {
        this.activeIndex.set(
          (this.activeIndex() + 1) % this.testimonials().length
        );
      }, this.autoAdvanceDelay);
    }
  }

  private stopAutoAdvance() {
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
      this.autoAdvanceInterval = null;
    }
  }

  private pauseAutoAdvance() {
    this.stopAutoAdvance();
  }

  private resumeAutoAdvanceAfterDelay() {
    // Resume auto-advance after 3 seconds of inactivity
    setTimeout(() => {
      this.startAutoAdvance();
    }, 3000);
  }
}
