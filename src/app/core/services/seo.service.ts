import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: any;
}

/**
 * SEO Service for managing page-specific meta tags and structured data
 * Follows best practices for Google, Bing, and social media optimization
 */
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  private defaultSEO: PageSEO = {
    title: 'HIT Egypt | Elite Fitness Coaching',
    description: 'Elite fitness coaching in Cairo, Egypt. Transform your body with personalized training programs.',
    keywords: 'fitness coaching, personal training, gym Cairo',
    ogTitle: 'HIT Egypt | Elite Fitness Coaching',
    ogDescription: 'Transform your body with elite fitness coaching.',
    ogImage: 'https://hitegypt.com/assets/og-image.jpg',
    ogType: 'website',
    canonical: 'https://hitegypt.com'
  };

  /**
   * Update page-specific SEO metadata
   * @param seo PageSEO object with title, description, keywords, and OG tags
   */
  updatePageSEO(seo: Partial<PageSEO>): void {
    const merged = { ...this.defaultSEO, ...seo };

    // Update title tag
    this.titleService.setTitle(merged.title!);

    // Update meta description
    this.metaService.updateTag({ name: 'description', content: merged.description! });

    // Update keywords
    if (merged.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: merged.keywords });
    }

    // Update Open Graph tags
    this.updateOpenGraphTags({
      title: merged.ogTitle!,
      description: merged.ogDescription!,
      image: merged.ogImage!,
      type: merged.ogType!,
      url: merged.canonical!
    });

    // Update canonical URL
    if (merged.canonical) {
      this.updateCanonicalUrl(merged.canonical);
    }

    // Update structured data if provided
    if (merged.structuredData) {
      this.updateStructuredData(merged.structuredData);
    }
  }

  /**
   * Update Open Graph (social media) tags
   */
  private updateOpenGraphTags(data: {
    title: string;
    description: string;
    image: string;
    type: string;
    url: string;
  }): void {
    this.metaService.updateTag({ property: 'og:title', content: data.title });
    this.metaService.updateTag({ property: 'og:description', content: data.description });
    this.metaService.updateTag({ property: 'og:image', content: data.image });
    this.metaService.updateTag({ property: 'og:type', content: data.type });
    this.metaService.updateTag({ property: 'og:url', content: data.url });
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  /**
   * Update JSON-LD structured data
   */
  private updateStructuredData(data: any): void {
    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Get SEO metadata for a specific page
   */
  getPageSEO(page: string): PageSEO {
    const pageMetadata: { [key: string]: PageSEO } = {
      home: {
        title: 'HIT Egypt | Elite Fitness Coaching | Transform Your Body',
        description: 'Join HIT Egypt for elite fitness coaching and personalized training programs. Transform your body and achieve peak performance with our expert trainers.',
        keywords: 'fitness coaching Cairo, personal training Egypt, gym Cairo, fitness classes, body transformation',
        ogTitle: 'HIT Egypt | Elite Fitness Coaching',
        ogDescription: 'Transform your body with elite fitness coaching programs designed for real results.',
        ogImage: 'https://hitegypt.com/assets/og-image.jpg',
        canonical: 'https://hitegypt.com/'
      },
      services: {
        title: 'Programs | HIT Egypt',
        description: 'Explore our fitness programs including group classes, personal training, nutrition coaching, and transformation programs. Find the perfect program for your goals.',
        keywords: 'fitness programs Cairo, workout classes, personal training packages, group fitness, nutrition coaching',
        ogTitle: 'Programs | HIT Egypt',
        ogDescription: 'Discover our range of fitness programs and training packages.',
        canonical: 'https://hitegypt.com/services'
      },
      about: {
        title: 'About | HIT Egypt',
        description: 'Learn about HIT Egypt\'s mission, philosophy, and team of certified fitness professionals dedicated to transforming lives through elite coaching.',
        keywords: 'about HIT Egypt, fitness coaches Cairo, personal trainers, certified trainers Egypt',
        ogTitle: 'About | HIT Egypt',
        ogDescription: 'Meet the team behind HIT Egypt\'s elite fitness coaching.',
        canonical: 'https://hitegypt.com/about'
      },
      contact: {
        title: 'Contact | HIT Egypt',
        description: 'Get in touch with HIT Egypt. We\'re located in Cairo at Heliopolis Sporting Club. Contact us for membership, classes, or corporate programs.',
        keywords: 'contact HIT Egypt, gym Cairo, fitness coaching contact, personal training Cairo',
        ogTitle: 'Contact | HIT Egypt',
        ogDescription: 'Contact HIT Egypt for fitness coaching and training programs.',
        canonical: 'https://hitegypt.com/contact'
      },
      testimonials: {
        title: 'Member Stories | HIT Egypt',
        description: 'Read success stories from HIT Egypt members. See real transformations and results from our fitness coaching programs.',
        keywords: 'fitness testimonials, success stories, member transformations, fitness results',
        ogTitle: 'Member Stories | HIT Egypt',
        ogDescription: 'Real transformations and success stories from our community.',
        canonical: 'https://hitegypt.com/testimonials'
      },
      privacy: {
        title: 'Privacy Policy | HIT Egypt',
        description: 'Read HIT Egypt\'s privacy policy. We take your data privacy seriously and are transparent about how we handle your information.',
        keywords: 'privacy policy, data protection, GDPR compliance',
        ogTitle: 'Privacy Policy | HIT Egypt',
        canonical: 'https://hitegypt.com/privacy-policy'
      },
      terms: {
        title: 'Terms of Service | HIT Egypt',
        description: 'HIT Egypt Terms of Service. Please read our terms before using our fitness coaching services.',
        keywords: 'terms of service, terms and conditions, legal',
        ogTitle: 'Terms of Service | HIT Egypt',
        canonical: 'https://hitegypt.com/terms-of-service'
      },
      cookies: {
        title: 'Cookie Policy | HIT Egypt',
        description: 'HIT Egypt Cookie Policy. Learn how we use cookies and how to manage your preferences.',
        keywords: 'cookie policy, cookies, data privacy',
        ogTitle: 'Cookie Policy | HIT Egypt',
        canonical: 'https://hitegypt.com/cookie-policy'
      }
    };

    return pageMetadata[page] || this.defaultSEO;
  }
}
