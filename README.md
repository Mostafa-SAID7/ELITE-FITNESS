# Elite Fitness Coaching - Angular Website

A cinematic, modern fitness coaching website built with Angular 18, Tailwind CSS, and Taiga UI.

## Features

- Cinematic Black & Red color scheme
- Smooth scroll animations
- Fully responsive design
- SEO optimized with meta tags
- Rounded buttons throughout
- Modern glass-morphism effects
- Taiga UI components integration
- Lazy-loaded routes for performance

## Tech Stack

- **Angular 18** (Standalone Components)
- **Tailwind CSS 3.4**
- **Taiga UI 4.0**
- **TypeScript 5.5**
- **SCSS**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/fitness-coaching` directory.

## Project Structure

```
src/
├── app/
│   ├── components/          # Shared components
│   │   ├── header/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── stats/
│   │   ├── services-preview/
│   │   ├── about-preview/
│   │   ├── testimonials/
│   │   └── cta-section/
│   ├── pages/              # Route pages
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   └── contact/
│   ├── app.component.ts
│   └── app.routes.ts
├── styles.scss             # Global styles
├── index.html
└── main.ts
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#DC2626',  // Your primary color
    // ... other shades
  },
  dark: {
    DEFAULT: '#0A0A0A',  // Background color
    // ... other shades
  }
}
```

### Fonts

The project uses:
- **Bebas Neue** for headings
- **Inter** for body text

To change fonts, update:
1. `src/index.html` - Google Fonts import
2. `tailwind.config.js` - Font family configuration

### Animations

Custom animations are defined in `tailwind.config.js` under `extend.animation` and `extend.keyframes`.

## Pages

1. **Home** (`/`) - Hero, stats, services preview, about preview, testimonials, CTA
2. **About** (`/about`) - Coach story, philosophy, certifications
3. **Services** (`/services`) - Programs, comparison table, FAQ
4. **Contact** (`/contact`) - Contact form, info, map placeholder

## SEO

The project includes:
- Meta tags for description, keywords, author
- Open Graph tags for social sharing
- Twitter cards
- Proper semantic HTML
- Title service integration per route

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own projects!
