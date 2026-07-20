import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonial-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonial-form.component.html'
})
export class TestimonialFormComponent {
  formSubmitted = signal(false);
  formData = {
    name: '',
    email: '',
    phone: '',
    location: '',
    program: '',
    rating: 5,
    quote: '',
    result: '',
    imageUrl: '',
    consent: false
  };

  programs = [
    'HIT Egypt Membership',
    'Sweat45',
    'Perform',
    'Prymal Sessions',
    'Hyper45',
    'Women\'s Sculpt Program',
    'Calisthenics Mastery',
    'Teen Fitness Program',
    'Senior Wellness Program',
    'BoxFit',
    'PostNatal Recovery Program',
    'Corporate Wellness Program',
    'Other'
  ];

  locations = [
    'New Cairo',
    'El Shorouk',
    'Zamalek',
    'New Capital',
    'Heliopolis',
    'Maadi',
    'Mohandessin',
    'Nasr City',
    '6th of October',
    'Multiple Locations',
    'Other'
  ];

  onSubmit() {
    if (this.validateForm()) {
      console.log('Form submitted:', this.formData);
      // In a real app, this would send data to a backend
      this.formSubmitted.set(true);
      this.resetForm();
      setTimeout(() => this.formSubmitted.set(false), 5000);
    }
  }

  validateForm(): boolean {
    if (!this.formData.name || !this.formData.email || !this.formData.quote || !this.formData.result) {
      alert('Please fill in all required fields');
      return false;
    }
    if (!this.formData.consent) {
      alert('Please accept the terms and conditions');
      return false;
    }
    return true;
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      location: '',
      program: '',
      rating: 5,
      quote: '',
      result: '',
      imageUrl: '',
      consent: false
    };
  }
}
