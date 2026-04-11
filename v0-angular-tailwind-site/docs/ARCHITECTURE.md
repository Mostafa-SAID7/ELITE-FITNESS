# Architecture Overview

## Project Structure

### Application Layout

```
src/
├── app/
│   ├── components/
│   │   ├── about-preview/      # About section preview
│   │   ├── cta-section/        # Call-to-action section
│   │   ├── footer/             # Footer component
│   │   ├── header/             # Navigation header
│   │   ├── hero/               # Hero section
│   │   ├── services-preview/   # Services showcase
│   │   ├── stats/              # Statistics section
│   │   └── testimonials/       # Client testimonials
│   ├── pages/
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── home/               # Home page
│   │   └── services/           # Services page
│   ├── app.component.ts        # Root component
│   └── app.routes.ts           # Route definitions
├── styles.scss                 # Global styles
├── index.html                  # HTML entry point
└── main.ts                     # Bootstrap file
```

## Component Architecture

### Page Components

- **Home**: Landing page with hero, services preview, stats, testimonials, and CTA
- **About**: Company information and team details
- **Services**: Detailed service offerings
- **Contact**: Contact form and information

### Reusable Components

- **Header**: Navigation bar with responsive menu
- **Footer**: Site footer with links and information
- **Hero**: Large banner section with call-to-action
- **Services Preview**: Grid of service cards
- **Stats**: Key metrics and achievements
- **Testimonials**: Client reviews and feedback
- **CTA Section**: Call-to-action section

## Routing

Routes are defined in `app.routes.ts` using Angular's standalone routing:

```typescript
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
];
```

## Styling

- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **SCSS**: Global styles in `styles.scss`
- **Component Styles**: Inline styles in component templates

## State Management

Currently using Angular services with RxJS for state management. No external state management library (Redux, NgRx) is implemented.

## Build Configuration

- **Angular CLI**: Build tool and development server
- **Vite**: Fast build tool integration
- **TypeScript**: Strict type checking enabled

## Performance Optimizations

- Lazy loading for route components
- Tree-shaking for unused code removal
- Production build with minification and optimization
- Gzip compression for assets

## Dependencies

### Core Dependencies
- `@angular/*`: Angular framework packages
- `rxjs`: Reactive programming library
- `tslib`: TypeScript runtime library
- `zone.js`: Angular zone management

### UI Libraries
- `@taiga-ui/*`: Taiga UI component library
- `@angular/cdk`: Component Dev Kit
- `@ng-web-apis/*`: Web APIs for Angular

### Development Dependencies
- `@angular-devkit/build-angular`: Angular build tools
- `@angular/cli`: Angular command-line interface
- `typescript`: TypeScript compiler
- `tailwindcss`: CSS framework
- `postcss`: CSS processor
- `autoprefixer`: CSS vendor prefixer

## Deployment

The application is configured for deployment on Vercel with the following setup:

- **Build Command**: `pnpm run build`
- **Output Directory**: `dist/fitness-coaching`
- **Install Command**: `pnpm install`
- **Framework**: Angular

See `docs/DEPLOYMENT.md` for detailed deployment instructions.
