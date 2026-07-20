# ELITE-FITNESS Angular Refactoring Plan

## Current State → Target State

### **CORE/ (Singleton Services, Guards, Models)**
Files to create/organize:
```
core/
├── services/
│   ├── api.service.ts          (NEW - placeholder for future API calls)
│   ├── logger.service.ts       (NEW - logging utility)
│   └── index.ts
├── guards/
│   └── index.ts                (NEW - for future route protection)
├── interceptors/
│   └── index.ts                (NEW - for future HTTP interception)
├── models/
│   ├── testimonial.model.ts    (MOVE from: src/app/data/testimonials.data.ts)
│   ├── service.model.ts        (MOVE from: src/app/data/services.data.ts)
│   ├── hero.model.ts           (MOVE from: src/app/data/hero.data.ts)
│   ├── stats.model.ts          (MOVE from: src/app/data/stats.data.ts)
│   ├── footer.model.ts         (MOVE from: src/app/data/footer.data.ts)
│   └── index.ts
├── enums/
│   └── index.ts                (NEW - if needed)
├── utils/
│   └── index.ts                (NEW - helpers, validators)
└── index.ts                    (Barrel export)
```

---

### **SHARED/ (Reusable Components, Pipes, Directives)**
```
shared/
├── components/
│   ├── layout/
│   │   ├── header/
│   │   │   └── header.component.ts       (MOVE from: src/app/components/header/)
│   │   ├── footer/
│   │   │   └── footer.component.ts       (MOVE from: src/app/components/footer/)
│   │   ├── navbar/
│   │   │   └── navbar.component.ts       (REUSE header or new)
│   │   └── index.ts
│   ├── ui/
│   │   ├── hero/
│   │   │   └── hero.component.ts         (MOVE from: src/app/components/hero/)
│   │   ├── stats/
│   │   │   └── stats.component.ts        (MOVE from: src/app/components/stats/)
│   │   ├── cta-section/
│   │   │   └── cta-section.component.ts  (MOVE from: src/app/components/cta-section/)
│   │   └── index.ts
│   └── index.ts
├── pipes/
│   └── index.ts                (NEW - if needed)
├── directives/
│   └── index.ts                (NEW - if needed)
├── models/
│   └── index.ts                (Shared types across features)
└── index.ts                    (Barrel export)
```

---

### **FEATURES/ (Feature Modules - Lazy Loaded)**

#### **1. HOME Feature**
```
features/home/
├── pages/
│   └── home.component.ts       (MOVE from: src/app/pages/home/)
├── components/
│   ├── about-preview.component.ts    (MOVE from: src/app/components/about-preview/)
│   ├── services-preview.component.ts (MOVE from: src/app/components/services-preview/)
│   └── index.ts
├── models/
│   ├── home.model.ts           (MOVE from: src/app/data/hero.data.ts, cta.data.ts)
│   └── index.ts
├── home.routes.ts              (NEW - feature routes)
└── index.ts                    (Barrel export)
```

#### **2. TESTIMONIALS Feature** (Most Complex)
```
features/testimonials/
├── pages/
│   ├── testimonials-list.component.ts  (MOVE from: src/app/pages/testimonials/)
│   ├── testimonial-submit.component.ts (MOVE from: src/app/pages/submit-testimonial/)
│   └── index.ts
├── components/
│   ├── testimonial-carousel/
│   │   └── testimonial-carousel.component.ts (MOVE from: src/app/components/testimonials/)
│   ├── testimonial-form/
│   │   └── testimonial-form.component.ts     (MOVE from: src/app/components/testimonial-form/)
│   ├── testimonial-card/
│   │   └── testimonial-card.component.ts     (NEW - extracted from list page)
│   └── index.ts
├── services/
│   ├── testimonial.service.ts  (NEW - CRUD operations)
│   └── index.ts
├── models/
│   ├── testimonial.model.ts    (MOVE from: src/app/data/testimonials.data.ts)
│   └── index.ts
├── store/                      (NEW - if using Signals for state)
│   ├── testimonial.store.ts
│   └── index.ts
├── testimonials.routes.ts      (NEW - feature routes)
└── index.ts                    (Barrel export)
```

#### **3. SERVICES (Programs) Feature**
```
features/services/
├── pages/
│   └── services.component.ts   (MOVE from: src/app/pages/services/)
├── components/
│   ├── service-card/
│   │   └── service-card.component.ts   (NEW - extracted from page)
│   └── index.ts
├── models/
│   ├── service.model.ts        (MOVE from: src/app/data/services.data.ts)
│   └── index.ts
├── services/
│   ├── program.service.ts      (NEW)
│   └── index.ts
├── services.routes.ts          (NEW - feature routes)
└── index.ts                    (Barrel export)
```

#### **4. ABOUT Feature**
```
features/about/
├── pages/
│   └── about.component.ts      (MOVE from: src/app/pages/about/)
├── models/
│   ├── about.model.ts          (MOVE from: src/app/data/about.data.ts, about-page.data.ts)
│   └── index.ts
├── about.routes.ts             (NEW)
└── index.ts                    (Barrel export)
```

#### **5. CONTACT Feature**
```
features/contact/
├── pages/
│   └── contact.component.ts    (MOVE from: src/app/pages/contact/)
├── components/
│   ├── contact-form/
│   │   └── contact-form.component.ts   (NEW - extracted if needed)
│   └── index.ts
├── services/
│   ├── contact.service.ts      (NEW - send emails, etc.)
│   └── index.ts
├── models/
│   ├── contact.model.ts        (MOVE from: src/app/data/contact-page.data.ts)
│   └── index.ts
├── contact.routes.ts           (NEW)
└── index.ts                    (Barrel export)
```

#### **6. LEGAL Feature** (Privacy, Terms, Cookies)
```
features/legal/
├── pages/
│   ├── privacy-policy.component.ts    (MOVE from: src/app/pages/privacy-policy/)
│   ├── terms-of-service.component.ts  (MOVE from: src/app/pages/terms-of-service/)
│   ├── cookie-policy.component.ts     (MOVE from: src/app/pages/cookie-policy/)
│   └── index.ts
├── legal.routes.ts             (NEW)
└── index.ts                    (Barrel export)
```

---

### **LAYOUTS/ (Page Shells)**
```
layouts/
├── main-layout/
│   └── main-layout.component.ts        (NEW - wraps header + router-outlet + footer)
├── auth-layout/
│   └── auth-layout.component.ts        (NEW - for future login pages, no header/footer)
└── index.ts                    (Barrel export)
```

---

### **APP-LEVEL FILES**
```
src/app/
├── app.component.ts            (KEEP - already minimal)
├── app.config.ts               (KEEP - providers config)
├── app.routes.ts               (UPDATE - import feature routes, lazy-load)
└── index.ts                    (NEW - Barrel export)
```

---

## Migration Strategy (Order Matters!)

### **Phase 1: Create Folder Structure**
1. Create `core/`, `shared/`, `features/`, `layouts/` folders
2. Create sub-folders per plan above
3. Create placeholder `index.ts` files in each

### **Phase 2: Move Shared/Layout Components**
1. Move `components/header/` → `shared/components/layout/header/`
2. Move `components/footer/` → `shared/components/layout/footer/`
3. Move `components/hero/` → `shared/components/ui/hero/`
4. Move `components/stats/` → `shared/components/ui/stats/`
5. Move `components/cta-section/` → `shared/components/ui/cta-section/`
6. Create barrel exports in each

### **Phase 3: Extract Data → Models**
1. Move `data/hero.data.ts` → `core/models/hero.model.ts`
2. Move `data/stats.data.ts` → `core/models/stats.model.ts`
3. Move `data/footer.data.ts` → `core/models/footer.model.ts`
4. Move `data/cta.data.ts` → `features/home/models/home.model.ts`
5. Move `data/services.data.ts` → `features/services/models/service.model.ts`
6. Move `data/testimonials.data.ts` → `features/testimonials/models/testimonial.model.ts`
7. Move other `data/` files to respective features

### **Phase 4: Move Page Components → Features**
1. Move `pages/home/` → `features/home/pages/`
2. Move `pages/testimonials/` → `features/testimonials/pages/testimonials-list/`
3. Move `pages/submit-testimonial/` → `features/testimonials/pages/testimonial-submit/`
4. Move `pages/services/` → `features/services/pages/`
5. Move `pages/about/` → `features/about/pages/`
6. Move `pages/contact/` → `features/contact/pages/`
7. Move legal pages → `features/legal/pages/`

### **Phase 5: Move Feature Components**
1. Move `components/testimonials/` → `features/testimonials/components/testimonial-carousel/`
2. Move `components/testimonial-form/` → `features/testimonials/components/testimonial-form/`
3. Move `components/about-preview/` → `features/home/components/`
4. Move `components/services-preview/` → `features/home/components/`

### **Phase 6: Create Feature Routes**
1. Create `features/home/home.routes.ts`
2. Create `features/testimonials/testimonials.routes.ts`
3. Create `features/services/services.routes.ts`
4. Create `features/about/about.routes.ts`
5. Create `features/contact/contact.routes.ts`
6. Create `features/legal/legal.routes.ts`

### **Phase 7: Update app.routes.ts**
- Import all feature routes
- Set up lazy-loading for each feature
- Keep redirect to home at bottom

### **Phase 8: Update All Imports**
- Search/replace old import paths
- Update component selectors if needed
- Test build

### **Phase 9: Create Barrel Exports**
- Add `index.ts` to all folders
- Re-export components, services, models

---

## Dependency Graph

```
app.routes.ts
    ↓
layouts/ (main-layout includes header + footer)
    ├── header (from shared/components/layout/)
    ├── footer (from shared/components/layout/)
    └── router-outlet

features/home/
    ├── pages/home.component
    ├── components/ (about-preview, services-preview)
    ├── hero, stats (from shared/components/ui/)
    └── models/home.model

features/testimonials/
    ├── pages/ (testimonials-list, testimonial-submit)
    ├── components/ (carousel, form, card)
    ├── services/testimonial.service
    ├── models/testimonial.model
    └── store/ (if using Signals)

features/services/
    ├── pages/services.component
    ├── components/ (service-card)
    └── models/service.model

features/about/, contact/, legal/
    ├── pages/
    └── models/

core/
    ├── models/ (shared global types)
    ├── services/ (API, logger, etc.)
    └── guards/ (future auth guards)

shared/
    ├── components/ (reusable UI & layout)
    └── pipes/, directives/ (if any)
```

---

## Files to Delete After Migration
- `src/app/components/` (entire folder - moved to shared/ and features/)
- `src/app/pages/` (entire folder - moved to features/)
- `src/app/data/` (entire folder - co-located in features/ or core/models/)

---

## Import Path Examples

**Before:**
```ts
import { headerComponent } from './components/header/header.component';
import { testimonialData } from './data/testimonials.data';
import { HomeComponent } from './pages/home/home.component';
```

**After:**
```ts
import { HeaderComponent } from '@shared/components/layout/header';
import { TESTIMONIALS_DATA } from '@features/testimonials/models';
import { HomeComponent } from '@features/home/pages';
```

With path aliases in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@app/*": ["src/app/*"],
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"],
      "@layouts/*": ["src/app/layouts/*"]
    }
  }
}
```

---

## Validation Checklist After Migration

- [ ] All components moved and renamed (PascalCase)
- [ ] All data files converted to models
- [ ] All imports use new paths
- [ ] Feature routes are lazy-loaded
- [ ] No circular dependencies
- [ ] Build succeeds without errors
- [ ] App runs locally without errors
- [ ] All routes work correctly
- [ ] No console errors or warnings
- [ ] Barrel exports work correctly

