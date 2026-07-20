# Architecture Guide - HIT Egypt

Comprehensive documentation of the HIT Egypt fitness coaching application architecture, design patterns, and technical decisions.

## 🏗️ System Architecture Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                      HIT EGYPT FRONTEND                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              SHARED COMPONENTS LAYER                     │    │
│  │  ├─ Header (Navigation, Logo, Responsive Menu)          │    │
│  │  ├─ Footer (Links, Social, Contact Info)                │    │
│  │  └─ Common UI (Buttons, Cards, Forms, Modals)           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            ↓                                      │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              FEATURE MODULES (Lazy-Loaded)              │    │
│  │  ├─ Home Feature                                        │    │
│  │  │   └─ Hero, Programs, Testimonials, Stats, CTA        │    │
│  │  ├─ Services Feature                                    │    │
│  │  │   └─ Program Details, Comparison, Pricing            │    │
│  │  ├─ About Feature                                       │    │
│  │  │   └─ Story, Mission, Team, Values                    │    │
│  │  ├─ Contact Feature                                     │    │
│  │  │   └─ Form, Location Selection                        │    │
│  │  ├─ Testimonials Feature                                │    │
│  │  │   ├─ List View (Member Stories)                      │    │
│  │  │   └─ Submit Form (New Testimonials)                  │    │
│  │  └─ Legal Feature                                       │    │
│  │      ├─ Privacy Policy                                  │    │
│  │      ├─ Terms of Service                                │    │
│  │      └─ Cookie Policy                                   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            ↓                                      │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                CORE SERVICES LAYER                      │    │
│  │  ├─ SeoService (Meta Tags, Canonical URLs)              │    │
│  │  ├─ LoggerService (Structured Logging)                  │    │
│  │  ├─ AuthService (Authentication - Phase 2)              │    │
│  │  ├─ ApiService (HTTP Requests - Phase 2)                │    │
│  │  └─ NotificationService (Alerts, Toasts)                │    │
│  └─────────────────────────────────────────────────────────┘    │
│                            ↓                                      │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              ROUTER & GUARDS LAYER                      │    │
│  │  ├─ Application Router (app.routes.ts)                  │    │
│  │  ├─ AuthGuard (Route Protection - Phase 2)              │    │
│  │  ├─ CanDeactivate (Form Unsaved Warning)                │    │
│  │  └─ Title Service (Dynamic Page Titles)                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              STYLING & UTILITIES LAYER                  │    │
│  │  ├─ Tailwind CSS (Utility Classes)                      │    │
│  │  ├─ Global SCSS (Variables, Mixins, Theme)              │    │
│  │  └─ Component SCSS (Scoped Styles)                      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
                            ↓
         ┌──────────────────────────────────────┐
         │      BACKEND API (Phase 2+)           │
         ├──────────────────────────────────────┤
         │  ├─ User Management                  │
         │  ├─ Session Booking                  │
         │  ├─ Payment Processing               │
         │  ├─ Testimonial Management           │
         │  └─ Member Data                      │
         └──────────────────────────────────────┘
```

---

## 📁 Directory Structure

```
src/app/
├── core/                              # Singleton services & guards
│   ├── guards/
│   │   ├── auth.guard.ts             # Route protection
│   │   └── deactivate.guard.ts        # Form validation
│   ├── interceptors/
│   │   ├── auth.interceptor.ts       # Add Bearer token
│   │   └── error.interceptor.ts      # Global error handling
│   ├── services/
│   │   ├── seo.service.ts            # Meta tags & canonical URLs
│   │   ├── logger.service.ts         # Structured logging
│   │   ├── auth.service.ts           # Authentication (Phase 2)
│   │   ├── api.service.ts            # HTTP communication (Phase 2)
│   │   └── notification.service.ts   # Alerts & notifications
│   └── models/
│       ├── user.model.ts
│       ├── testimonial.model.ts
│       └── program.model.ts
│
├── shared/                            # Reusable components & utilities
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/               # Navigation header
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   └── header.component.scss
│   │   │   └── footer/               # Footer section
│   │   │       ├── footer.component.ts
│   │   │       ├── footer.component.html
│   │   │       └── footer.component.scss
│   │   └── common/
│   │       ├── button/
│   │       ├── card/
│   │       ├── modal/
│   │       └── loader/
│   └── pipes/
│       ├── phone.pipe.ts             # Phone number formatting
│       └── currency.pipe.ts          # Currency formatting
│
├── features/                          # Feature modules (lazy-loaded)
│   ├── home/
│   │   ├── pages/
│   │   │   └── home/
│   │   │       ├── home.component.ts
│   │   │       ├── home.component.html
│   │   │       └── home.component.scss
│   │   ├── components/
│   │   │   ├── hero-section/
│   │   │   ├── programs-preview/
│   │   │   ├── testimonials-carousel/
│   │   │   ├── stats-section/
│   │   │   ├── cta-section/
│   │   │   └── about-preview/
│   │   └── models/
│   │       └── home-page.model.ts
│   │
│   ├── services/                     # Programs & pricing page
│   │   ├── pages/
│   │   │   └── services/
│   │   ├── components/
│   │   │   ├── program-card/
│   │   │   ├── comparison-matrix/
│   │   │   ├── pricing-table/
│   │   │   └── faq-section/
│   │   └── models/
│   │       └── services-page.model.ts
│   │
│   ├── about/                        # About page
│   │   ├── pages/
│   │   │   └── about/
│   │   ├── components/
│   │   │   ├── company-story/
│   │   │   ├── team-section/
│   │   │   ├── values-section/
│   │   │   └── contact-info/
│   │   └── models/
│   │       └── about-page.model.ts
│   │
│   ├── contact/                      # Contact form page
│   │   ├── pages/
│   │   │   └── contact/
│   │   ├── components/
│   │   │   ├── contact-form/
│   │   │   └── location-select/
│   │   └── models/
│   │       └── contact-page.model.ts
│   │
│   ├── testimonials/                 # Member stories
│   │   ├── pages/
│   │   │   ├── testimonials-list/    # View all testimonials
│   │   │   └── testimonial-submit/   # Submit new testimonial
│   │   ├── components/
│   │   │   ├── testimonial-card/
│   │   │   ├── testimonial-carousel/
│   │   │   └── testimonial-form/
│   │   └── models/
│   │       └── testimonial.model.ts
│   │
│   └── legal/                        # Legal pages
│       ├── pages/
│       │   ├── privacy-policy/
│       │   ├── terms-of-service/
│       │   └── cookie-policy/
│       └── models/
│           └── legal-page.model.ts
│
├── app.component.ts                   # Root component (SEO management)
├── app.component.html
├── app.routes.ts                      # Route configuration
└── app.component.scss
```

---

## 🔀 Routing Architecture

### Route Configuration (app.routes.ts)

```
/ → HomeComponent
/services → ServicesComponent
/about → AboutComponent
/contact → ContactComponent
/testimonials → TestimonialsComponent (list)
/submit-testimonial → SubmitTestimonialComponent (form)
/privacy-policy → PrivacyPolicyComponent
/terms-of-service → TermsOfServiceComponent
/cookie-policy → CookiePolicyComponent
** → Redirect to /
```

### Route Protection (Phase 2+)
Protected routes for authenticated members using AuthGuard.

---

## 🎯 Feature Modules

### 1. Home Feature
**Purpose:** Showcase HIT Egypt programs, testimonials, and call-to-action

**Components:**
- HeroSection - Hero banner with headline and CTA
- ProgramsPreview - Display 4 main program types
- TestimonialsCarousel - Carousel of member success stories
- StatsSection - Key metrics (members, transformations, years)
- CtaSection - Call-to-action for booking
- AboutPreview - Company mission overview

**Data Sources:**
- `home-page.model.ts` - Static content and structure
- `SeoService` - Dynamic meta tags for social sharing

---

### 2. Services Feature
**Purpose:** Detailed program information and pricing structure

**Components:**
- ProgramCard - Display individual program details
- ComparisonMatrix - Compare 4 program types (Group, Personal, Online, Transform)
- PricingTable - Package and pricing options
- FaqSection - Frequently asked questions about programs

**Programs Offered:**
```
GROUP SESSIONS (All Levels)
├─ Hyper45 / Hyper60 - High-intensity interval training
├─ Sweat45 / HIT60 - Cardio-focused sessions
├─ Perform - Intermediate athletic training
└─ Prymal - Advanced bodyweight training

SPECIALTY SESSIONS (Targeted)
├─ Yoga - Flexibility & mindfulness
├─ Pilates - Core strength training
├─ Sculpt - Ladies-only strength training
├─ Calisthenics - Bodyweight mastery
└─ SWEAT Hyrox Simulation - Race training

TRANSFORMATION PROGRAMS (Multi-week)
├─ 21-Day Transformation Program
├─ Fabfit Ladies Program
├─ BUILD+ Program
└─ Hybrid Rockstar Program

PERSONAL & ONLINE (1-on-1)
├─ One-on-One In-Person Training
├─ Remote Online Coaching
├─ Customized Nutrition Programs
└─ Corporate Wellness Programs
```

**Data Source:** `services-page.model.ts`

---

### 3. About Feature
**Purpose:** Tell HIT Egypt's story and values

**Components:**
- CompanyStory - Mission and founding story
- TeamSection - Trainer profiles and expertise
- ValuesSection - Core values and philosophy
- ContactInfo - Location and contact details

**Data Source:** `about-page.model.ts`

---

### 4. Contact Feature
**Purpose:** Collect member inquiries and booking requests

**Components:**
- ContactForm - Form for name, email, message, phone
- LocationSelect - Choose from 8 HIT Egypt locations
- FormValidation - Real-time validation and submission

**8 HIT Egypt Locations:**
1. Terrace Mall (El Shorouk)
2. Patio Casa (El Shorouk)
3. Concord Plaza
4. Platinum Club
5. Katameya Residence
6. Suncity Mall (Sheraton)
7. Heliopolis Sporting Club
8. HIT Haus (Concord Gardens)

**Data Source:** `contact-page.model.ts`

---

### 5. Testimonials Feature
**Purpose:** Showcase member transformations and success stories

**Components:**
- TestimonialCard - Single testimonial display
- TestimonialCarousel - Auto-rotating testimonials
- TestimonialForm - Allow members to submit stories
- TestimonialsPage - Full list of all testimonials

**Testimonial Data:** 11 verified member stories with:
- Member name and location
- Programs used (Hyper45, Transformation, etc.)
- Before/After body composition
- Transformation timeline
- Quote or testimonial text

**Data Source:** `testimonial.model.ts`

---

### 6. Legal Feature
**Purpose:** Legal compliance documentation

**Components:**
- PrivacyPolicy - Data collection and privacy practices
- TermsOfService - Usage terms and conditions
- CookiePolicy - Cookie usage disclosure

---

## 🔧 Core Services

### SeoService
**Responsibility:** Dynamic meta tag management and canonical URLs

Provides page-specific SEO configuration for:
- Home, Services, About, Contact, Testimonials
- Dynamic Open Graph tags for social media
- Canonical URLs for duplicate prevention
- JSON-LD structured data

### LoggerService
**Responsibility:** Structured logging for debugging and monitoring

Usage:
```typescript
this.logger.info('User viewed page', { page: 'services' });
this.logger.error('Form submission failed', error);
```

### AuthService (Phase 2+)
**Responsibility:** User authentication and JWT token management
- Member login/logout
- Token refresh
- Permission checks

### ApiService (Phase 2+)
**Responsibility:** HTTP communication with backend
- REST API calls
- Error handling
- Request/response interceptors

---

## 🛡️ Guards & Interceptors

### AuthGuard (Phase 2+)
- Protects member-only routes
- Redirects to login if not authenticated
- Phase 2+ implementation

### ErrorInterceptor
- Catches HTTP errors globally
- Shows user-friendly error messages
- Logs errors to monitoring service

---

## 🎨 Styling Architecture

### Tailwind CSS
Primary utility framework for responsive design

### Custom SCSS
Component-specific styles in scoped `.component.scss` files

### Global Styles (styles.scss)
- CSS variables for HIT Egypt brand colors
- Font definitions
- Animations
- Dark theme configuration
- Responsive utilities

---

## 📊 Data Models

### User Model (Phase 2+)
```typescript
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredLocation: string;
  membershipTier: 'basic' | 'premium' | 'elite';
}
```

### Program Model
```typescript
interface Program {
  id: string;
  name: string;
  category: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  price: number;
  features: string[];
}
```

### Testimonial Model
```typescript
interface Testimonial {
  id: string;
  memberName: string;
  location: string;
  programsUsed: string[];
  transformation: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
}
```

---

## ⚡ Performance Optimizations

1. **Lazy Loading** - Routes load on demand
2. **Code Splitting** - Separate bundles per feature
3. **Tree Shaking** - Remove unused code
4. **Minification** - Smaller bundle size (381 KB)
5. **Change Detection** - OnPush strategy where applicable
6. **Image Optimization** - Responsive and lazy-loaded images

---

## 🔒 Security Measures

1. **Content Security Policy** - Prevent XSS attacks
2. **HTTPS Only** - Secure data transmission
3. **CORS Configuration** - Cross-origin protection
4. **Input Validation** - Form sanitization
5. **Authentication** - JWT tokens (Phase 2+)
6. **OWASP Compliance** - Security best practices

---

## 📱 Responsive Design

- Mobile-first approach
- Tailwind breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Tested on all major devices
- Touch-friendly interactions
- Accessibility (WCAG 2.1 AA)

---

## 🚀 Deployment Architecture

```
Local Development
      ↓
GitHub Repository
      ↓
GitHub Actions (CI/CD)
      ↓
Netlify (Production)
```

**Build Output:** `dist/fitness-coaching/` (381 KB gzipped)

---

## 📈 Future Architecture (Phase 2+)

### Backend Services
- User authentication system
- Session booking API
- Payment processing
- Testimonial moderation
- Analytics dashboard

### Database Schema (12 Tables)
- Users, Profiles, Programs, Trainers
- Sessions, Bookings, Payments, Invoices
- Memberships, Testimonials, Content, Locations
- See [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)

### Frontend Features
- Member dashboard
- Booking management
- Progress tracking
- Payment integration
- Email notifications
- Push notifications

---

## 📚 Related Documentation

- [SETUP.md](./SETUP.md) - Environment setup
- [GETTING_STARTED.md](./GETTING_STARTED.md) - Development workflow
- [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md) - Backend schema (Phase 2+)
- [API_REFERENCE.md](./API_REFERENCE.md) - API endpoints (Phase 2+)
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Design tokens and components

---

**Architecture Version:** 2.0  
**Last Updated:** July 20, 2026  
**Status:** Phase 1 Complete, Phase 2 Ready ✅
