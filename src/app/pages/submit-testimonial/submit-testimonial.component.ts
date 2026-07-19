import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialFormComponent } from '../../components/testimonial-form/testimonial-form.component';

@Component({
  selector: 'app-submit-testimonial',
  standalone: true,
  imports: [CommonModule, TestimonialFormComponent],
  templateUrl: './submit-testimonial.component.html'
})
export class SubmitTestimonialComponent {
}
