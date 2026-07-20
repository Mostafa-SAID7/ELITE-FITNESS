import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICES_PAGE_DATA, ComparisonFeature, ComparisonPlan, PlanName } from '@features/services/models/services-page.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  pageData = SERVICES_PAGE_DATA;
  programs = SERVICES_PAGE_DATA.programs;
  comparisonPlans: ComparisonPlan[] = SERVICES_PAGE_DATA.comparison.plans;
  comparisonFeatures: ComparisonFeature[] = SERVICES_PAGE_DATA.comparison.features;
  faqs = [...SERVICES_PAGE_DATA.faqs];

  getFeatureValue(feature: ComparisonFeature, planName: PlanName): boolean | string {
    return feature.values[planName];
  }

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
