# Setup Guide - HIT Egypt

Complete setup and development environment configuration for the HIT Egypt fitness coaching platform.

## 📋 Prerequisites

Ensure you have the following installed on your system:

```
✓ Node.js 18.x or higher
✓ npm 9.x or higher
✓ Git (for version control)
✓ Code editor (VS Code recommended)
```

### Verify Installation

```bash
node --version    # Should output v18.x.x or higher
npm --version     # Should output 9.x.x or higher
git --version     # Should output git version
```

---

## 🚀 Quick Installation (5 minutes)

### 1. Clone Repository

```bash
git clone https://github.com/Mostafa-SAID7/ELITE-FITNESS.git
cd ELITE-FITNESS
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages:
- Angular 18 with standalone components
- Tailwind CSS for styling
- TypeScript for type safety
- RxJS for reactive programming
- Angular Router with lazy loading

### 3. Start Development Server

```bash
npm start
```

**Expected Output:**
```
✔ Compiled successfully
✔ Application bundle generated successfully
→ Local:   http://localhost:4200/
→ Press q + enter to quit
```

### 4. Open in Browser

Navigate to `http://localhost:4200/` to see the HIT Egypt application running locally.

**Verify Installation:**
- [ ] Homepage loads with HIT Egypt branding
- [ ] Navigation menu works (Home, Services, About, Contact)
- [ ] No console errors (Press F12 to check)
- [ ] Styling displays correctly
- [ ] Responsive design works on mobile (Press Ctrl+Shift+M)

---

## 🏗️ Project Structure

```
ELITE-FITNESS/
├── src/
│   ├── app/
│   │   ├── core/                      # Core services & utilities
│   │   │   ├── services/              # SeoService, LoggerService, etc.
│   │   │   ├── guards/                # AuthGuard, route protection
│   │   │   └── interceptors/          # HTTP interceptors
│   │   ├── shared/                    # Shared components
│   │   │   └── components/            # Header, Footer, layout
│   │   ├── features/                  # Feature modules (lazy-loaded)
│   │   │   ├── home/                  # Home page with hero, programs, testimonials
│   │   │   ├── services/              # Programs page (Group, Personal, Online, Transform)
│   │   │   ├── about/                 # About page with company story
│   │   │   ├── contact/               # Contact form and inquiry handling
│   │   │   ├── testimonials/          # Member stories and success stories
│   │   │   └── legal/                 # Privacy Policy, Terms, Cookie Policy
│   │   ├── app.component.ts           # Root component with SEO management
│   │   ├── app.routes.ts              # Route configuration
│   │   └── app.component.html         # Root template
│   ├── assets/
│   │   ├── favicon.svg                # HIT Egypt brand icon
│   │   └── images/                    # Static images
│   ├── index.html                     # Main HTML with SEO meta tags
│   ├── styles.scss                    # Global Tailwind & custom styles
│   ├── main.ts                        # Application entry point
│   └── styles/
│       └── tailwind.css               # Tailwind CSS imports
├── public/
│   ├── robots.txt                     # Search engine crawling rules
│   ├── sitemap.xml                    # URL map for SEO
│   └── manifest.json                  # PWA configuration
├── angular.json                       # Angular CLI configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Dependencies & scripts
└── docs/                              # Comprehensive documentation (20 files)
```

---

## 🛠️ Available Commands

### Development

```bash
# Start development server (with hot reload)
npm start

# Run unit tests
npm test

# Run tests with coverage report
npm run test:coverage

# Lint TypeScript files
npm run lint
```

### Build & Production

```bash
# Build for production
npm run build

# Build with production optimizations
npm run build:prod

# Serve built application locally
npm run serve

# Analyze bundle size
npm run analyze
```

### Code Quality

```bash
# Format code with Prettier
npm run format

# Check TypeScript compilation
npx tsc --noEmit

# Run all checks (lint + type check)
npm run check
```

---

## 📦 Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Angular 18 | Frontend framework with standalone components |
| **Language** | TypeScript 5.2 | Type-safe programming |
| **Styling** | Tailwind CSS 3 | Utility-first CSS framework |
| **UI Utilities** | SCSS | Component-specific styling |
| **Routing** | Angular Router | Page navigation with lazy loading |
| **State** | RxJS 7 | Reactive programming patterns |
| **Build Tool** | Vite (via Angular CLI) | Fast development builds |
| **Package Manager** | npm 9+ | Dependency management |
| **Deployment** | Netlify | Continuous deployment with CI/CD |

---

## 🌍 Environment Variables

Copy the example environment file and configure for your setup:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your settings:
```env
NODE_ENV=development
PORT=4200
# API configuration (for Phase 2)
# API_BASE_URL=http://localhost:3000/api
```

---

## 🔧 Configuration Files

### angular.json
- Defines build and serve configurations
- Specifies assets (favicon, robots.txt, sitemap.xml, manifest.json)
- Configures TypeScript and CSS processing

### tailwind.config.js
- Custom HIT Egypt brand colors
- Extended spacing tokens
- Custom animation definitions

### tsconfig.json
- TypeScript strict mode enabled
- Path aliases for imports
- Module resolution configuration

---

## ⚡ Development Workflow

### 1. Start Development Server
```bash
npm start
```
The app auto-reloads on file changes.

### 2. Make Changes
Edit files in `src/app/features/` or `src/app/shared/`
- Changes are instantly reflected in browser
- TypeScript errors shown in IDE and terminal

### 3. Test Locally
```bash
npm test
```
Run unit tests in watch mode.

### 4. Build & Verify
```bash
npm run build
```
Verify the build completes without errors (Exit Code 0).

### 5. Commit Changes
```bash
git add .
git commit -m "feat: description of changes"
git push origin feature-branch
```

---

## 🌐 Routes Overview

The HIT Egypt application includes the following routes:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomeComponent | Homepage with hero, programs, testimonials |
| `/services` | ServicesComponent | Program details (Group, Personal, Online, Transform) |
| `/about` | AboutComponent | Company story and mission |
| `/contact` | ContactComponent | Contact form and inquiry submission |
| `/testimonials` | TestimonialsComponent | Member success stories |
| `/submit-testimonial` | SubmitTestimonialComponent | Member testimonial submission |
| `/privacy-policy` | PrivacyPolicyComponent | Privacy policy document |
| `/terms-of-service` | TermsOfServiceComponent | Terms of service document |
| `/cookie-policy` | CookiePolicyComponent | Cookie policy document |

---

## 🎨 HIT Egypt Brand

### Color Scheme
- **Primary Red**: #FF0000 - HIT Egypt brand color
- **Dark Background**: #0F0F0F - Dark theme
- **Accent Gold**: #D4AF37 - Premium accent
- **Neutral**: #FFFFFF, #666666 - Text and borders

### Locations
HIT Egypt operates 8 locations across Cairo:
1. Terrace Mall (El Shorouk)
2. Patio Casa (El Shorouk)
3. Concord Plaza
4. Platinum Club
5. Katameya Residence
6. Suncity Mall (Sheraton)
7. Heliopolis Sporting Club
8. HIT Haus (Concord Gardens)

### Programs
- **Hyper45 / Hyper60** - High-intensity interval training
- **Sweat45 / HIT60** - Cardio-focused sessions
- **Perform** - Intermediate athletic training
- **Prymal** - Advanced bodyweight training
- **Yoga / Pilates** - Flexibility and mindfulness
- **Sculpt** - Ladies-only strength training
- **Calisthenics** - Bodyweight mastery
- **Transformation Programs** - Multi-week structured programs

---

## 🐛 Troubleshooting

### Port 4200 Already in Use

On **Windows** (PowerShell):
```powershell
# Find process using port 4200
netstat -ano | findstr :4200

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F

# Or use different port
ng serve --port 4201
```

On **Mac/Linux**:
```bash
# Find and kill process
lsof -ti:4200 | xargs kill -9

# Or use different port
ng serve --port 4201
```

### Dependencies Installation Error

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Build Error: TypeScript Compilation

```bash
# Check TypeScript version
npx tsc --version

# Clear cache and rebuild
rm -rf .angular/cache
npm run build
```

### Application Not Loading

1. Check browser console (F12) for errors
2. Verify port 4200 is accessible
3. Check that all routes are properly configured in `app.routes.ts`
4. Clear browser cache (Ctrl+Shift+Delete)
5. Hard refresh (Ctrl+F5)

---

## 📚 Next Steps

1. **Explore Components** - Review `src/app/features/` structure
2. **Read Documentation** - Start with [ARCHITECTURE.md](./ARCHITECTURE.md)
3. **Make a Change** - Edit a component and see hot reload
4. **Run Tests** - Execute `npm test` to verify setup
5. **Build Production** - Run `npm run build` to see optimization

---

## 💬 Need Help?

- **Documentation Hub**: See [INDEX.md](./INDEX.md) for all guides
- **Architecture Details**: Read [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Development Guide**: See [GETTING_STARTED.md](./GETTING_STARTED.md)
- **Issues**: Open a GitHub issue for problems
- **FAQ**: Check [FAQ.md](./FAQ.md) for common questions

---

**Setup Guide Version:** 2.0  
**Last Updated:** July 20, 2026  
**Status:** Ready for Development ✅
