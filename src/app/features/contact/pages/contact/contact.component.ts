import { Component, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONTACT_PAGE_DATA } from '@features/contact/models/contact.model';
import { CanComponentDeactivate } from '@core/guards';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements CanComponentDeactivate {
  private fb = new FormBuilder();
  private elRef: ElementRef;

  constructor(elRef: ElementRef) { 
    this.elRef = elRef; 
  }

  formSubmitted = signal(false);
  isSubmitting = signal(false);
  dropdownOpen = signal(false);
  selectedLocation = signal('');
  pageData = CONTACT_PAGE_DATA;

  contactForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    goal: ['', Validators.required],
    message: ['']
  });

  goals = CONTACT_PAGE_DATA.goals;
  contactInfo = CONTACT_PAGE_DATA.contactInfo;
  socialLinks = CONTACT_PAGE_DATA.socialLinks;

  toggleDropdown() {
    this.dropdownOpen.update(v => !v);
    if (!this.dropdownOpen()) {
      this.contactForm.get('goal')?.markAsTouched();
    }
  }

  selectLocation(location: string) {
    this.selectedLocation.set(location);
    this.contactForm.get('goal')?.setValue(location);
    this.contactForm.get('goal')?.markAsTouched();
    this.dropdownOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.dropdownOpen() && !this.elRef.nativeElement.contains(event.target)) {
      this.dropdownOpen.set(false);
      this.contactForm.get('goal')?.markAsTouched();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.dropdownOpen()) {
      this.dropdownOpen.set(false);
      this.contactForm.get('goal')?.markAsTouched();
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.formSubmitted.set(true);
      }, 1500);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.selectedLocation.set('');
    this.formSubmitted.set(false);
  }

  /**
   * CanComponentDeactivate Implementation
   * Warns user before leaving page with unsaved changes
   */
  canDeactivate(): Observable<boolean> | boolean {
    // Allow navigation if form is pristine (not modified)
    if (this.contactForm.pristine || this.formSubmitted()) {
      return true;
    }

    // Form has unsaved changes - ask user for confirmation
    return confirm(
      'You have unsaved changes in the contact form. Are you sure you want to leave without sending your message?'
    );
  }
}
