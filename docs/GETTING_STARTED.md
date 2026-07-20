# Getting Started - HIT Egypt Development

## 🚀 Quick Start (5 minutes)

### Prerequisites
```bash
# Check installed versions
node --version    # Should be 18+
npm --version     # Should be 10+
```

### Setup & Run
```bash
# 1. Clone repository
git clone <repo-url>
cd ELITE-FITNESS

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser
# Navigate to http://localhost:4200
```

---

## 📋 First-Time Setup (30 minutes)

### Step 1: Environment Setup
```bash
# Node.js installation
# Download from https://nodejs.org/ (v18 or higher)

# Verify installation
node --version
npm --version
```

### Step 2: Clone Repository
```bash
git clone <repository-url>
cd ELITE-FITNESS
```

### Step 3: Install Dependencies
```bash
npm install
```

This installs:
- Angular 18+
- Tailwind CSS
- TypeScript
- Testing frameworks
- Development tools

### Step 4: Environment Configuration
```bash
# Copy example environment
cp src/environments/environment.example.ts src/environments/environment.ts

# Edit if needed for local development
# Most defaults work for development
```

### Step 5: Start Development Server
```bash
npm start
```

Expected output:
```
✔ Compiled successfully
✔ Application bundle generated successfully
→ Local:   http://localhost:4200/
```

### Step 6: Verify Installation
Open http://localhost:4200 in your browser
- [ ] Homepage loads
- [ ] Navigation works
- [ ] No console errors
- [ ] Styling appears correct

---

## 🛠️ Development Workflow

### Daily Workflow
```bash
# 1. Start of day
npm start

# 2. Make code changes in IDE
# Changes auto-reload in browser

# 3. Run tests
npm test

# 4. Build & verify
npm run build

# 5. Commit & push
git add .
git commit -m "feat: description"
git push origin feature-branch
```

### Common Tasks

#### Create New Component
```bash
# Use Angular CLI
ng generate component features/your-feature/components/your-component

# Or manually:
# 1. Create folder: src/app/features/your-feature/components/your-component/
# 2. Create files:
#    - your-component.component.ts
#    - your-component.component.html
#    - your-component.component.scss
```

#### Create New Service
```bash
ng generate service core/services/your-service

# Or manually in: src/app/core/services/your-service.ts
```

#### Run Tests
```bash
npm test
# or with coverage
npm run test:coverage
```

#### Build for Production
```bash
npm run build
# Output in: dist/fitness-coaching/
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                 # Shared services, guards, interceptors
│   │   ├── services/        # API, Logger, SEO services
│   │   ├── guards/          # Auth, Deactivate guards
│   │   ├── interceptors/    # Auth, Error interceptors
│   │   ├── models/          # Data interfaces
│   │   └── utils/           # Error handler utilities
│   ├── shared/              # Reusable components
│   │   └── components/      # Header, Footer, UI components
│   ├── features/            # Feature modules (lazy-loaded)
│   │   ├── home/
│   │   ├── services/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── testimonials/
│   │   └── legal/
│   ├── app.component.ts     # Root component
│   ├── app.routes.ts        # Route configuration
│   └── app.component.html   # Root template
├── assets/                  # Static assets, images, favicon
├── environments/            # Environment configs
├── styles.scss             # Global styles
└── main.ts                 # Application entry point
```

---

## 🎯 Key Concepts

### Feature-Based Architecture
- Each feature is self-contained
- Easy to scale and maintain
- Lazy-loaded for performance
- Clear separation of concerns

### Standalone Components
- No module declarations needed
- Simpler import statements
- Better tree-shaking
- Modern Angular approach

### Services
Located in `src/app/core/services/`:
- `logger.service.ts` - Structured logging
- `api.service.ts` - HTTP communication
- `seo.service.ts` - Meta tag management

### Guards
Located in `src/app/core/guards/`:
- `auth.guard.ts` - Route protection
- Implement `CanActivate`, `CanDeactivate`

### Interceptors
Located in `src/app/core/interceptors/`:
- `auth.interceptor.ts` - Add Bearer token
- `error.interceptor.ts` - Handle errors globally

---

## 🎨 Styling Guide

### Tailwind CSS
Primary utility classes used throughout:
```html
<div class="flex items-center justify-between gap-4 p-4 rounded-lg">
  Content here
</div>
```

### Custom SCSS
For component-specific styles:
```scss
// src/app/components/your-component/your-component.component.scss
.component-class {
  &:hover {
    @apply bg-primary-600;
  }
}
```

### Global Styles
Defined in `src/styles.scss`:
- Color variables
- Typography
- Utility classes
- Animations

### Spacing System
```scss
.section-padding           // Large sections
.section-padding-compact   // Footer, smaller sections
.section-padding-reduced   // Internal sections
```

---

## 🔗 Routing

### Adding a New Route
Edit `src/app/app.routes.ts`:
```typescript
{
  path: 'your-path',
  loadComponent: () => import('./features/your-feature/pages/your-page.component')
    .then(m => m.YourPageComponent),
  title: 'Page Title | HIT Egypt'
}
```

### Lazy Loading
Routes are lazy-loaded by default using `loadComponent`.
This improves initial page load.

### Navigation
```html
<a routerLink="/your-path">Link Text</a>
```

---

## 🧪 Testing

### Run Unit Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Test File Location
Place tests next to component:
```
your-component.component.ts
your-component.component.spec.ts  ← Test file
your-component.component.html
```

### Example Test
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

---

## 🐛 Debugging

### Browser DevTools
1. Open Chrome DevTools (F12)
2. Go to Sources tab
3. Find your component TypeScript file
4. Set breakpoints
5. Use debugger to step through code

### Angular DevTools Extension
1. Install Chrome extension
2. Helps debug component tree
3. View component properties
4. Inspect change detection

### Console Logging
```typescript
// In your component or service
console.log('Debug message', data);

// Or use Logger service
constructor(private logger: LoggerService) {}

this.logger.info('Message', data);
```

---

## 📦 Dependencies

### Key Packages
```json
{
  "@angular/core": "^18.0.0",
  "@angular/platform-browser": "^18.0.0",
  "@angular/router": "^18.0.0",
  "tailwindcss": "^3.x",
  "typescript": "^5.x"
}
```

### Adding New Dependencies
```bash
# Install package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Update all dependencies
npm update
```

### Checking for Vulnerabilities
```bash
npm audit
npm audit fix
```

---

## 🔐 Environment Variables

### Development Environment
File: `src/environments/environment.ts`
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Production Environment
File: `src/environments/environment.prod.ts`
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.hitegypt.com'
};
```

### Using Environment Variables
```typescript
import { environment } from '@env/environment';

export class ApiService {
  private apiUrl = environment.apiUrl;
}
```

---

## 🚀 Building for Production

### Build Process
```bash
npm run build
```

Output: `dist/fitness-coaching/`

### Build Verification
```bash
# Check bundle size
ls -lh dist/fitness-coaching/

# Open main.js in dist folder
# Should see minified code
```

### Deployment
```bash
# Using Docker
docker build -t hit-egypt .
docker run -p 80:80 hit-egypt

# Or directly to server
# Copy dist/fitness-coaching/* to /var/www/app/
```

---

## 📚 Common Commands Reference

```bash
# Development
npm start              # Start dev server
npm run build          # Production build
npm test               # Run tests
npm run lint           # Run linter

# Code Quality
npm run test:coverage  # Coverage report
npm run format         # Format code
npm run typecheck      # Type checking

# Git Workflow
git status             # Check status
git add .              # Stage changes
git commit -m "msg"    # Create commit
git push origin branch # Push to remote
git pull origin main   # Pull latest

# Angular CLI
ng generate component  # Create component
ng generate service    # Create service
ng build              # Build project
ng serve              # Serve project
```

---

## 🆘 Troubleshooting

### Port 4200 Already in Use
```bash
# Kill existing process
# On Windows: taskkill /F /IM node.exe
# On Mac/Linux: lsof -ti:4200 | xargs kill -9

# Or use different port
ng serve --port 4201
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear build cache
rm -rf dist .angular

# Rebuild
npm run build
```

### TypeScript Errors
```bash
# Check TypeScript version
npx tsc --version

# Verify configuration
npx tsc --noEmit
```

---

## 📖 Additional Resources

### Documentation Files
- [ARCHITECTURE.md](../docs/ARCHITECTURE.md) - Project structure
- [REFACTORING_GUIDE.md](../REFACTORING_GUIDE.md) - Code patterns
- [DEPLOYMENT.md](../DEPLOYMENT.md) - Production deployment
- [API_REFERENCE.md](./API_REFERENCE.md) - API endpoints

### External Resources
- [Angular Documentation](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Helpful Commands
```bash
# Update Angular CLI
npm install -g @angular/cli@latest

# Check for outdated packages
npm outdated

# Generate code scaffolding
ng generate <schematic> <name>

# View help for any command
ng help
npm help
```

---

## ✅ Verification Checklist

After setup, verify:
- [ ] Node.js and npm installed correctly
- [ ] Repository cloned successfully
- [ ] Dependencies installed (npm install)
- [ ] Development server starts (npm start)
- [ ] Browser loads http://localhost:4200
- [ ] Navigation works correctly
- [ ] Console has no errors
- [ ] Styling displays properly
- [ ] Tests run successfully (npm test)
- [ ] Build succeeds (npm run build)

---

## 🎓 Next Steps

1. **Explore Components** - Open `src/app` and review structure
2. **Read Documentation** - Start with [ARCHITECTURE.md](../docs/ARCHITECTURE.md)
3. **Make Small Change** - Modify a component, see hot reload
4. **Run Tests** - Run `npm test` to see test framework
5. **Build Locally** - Run `npm run build` to see optimization

---

## 💬 Getting Help

- **Quick Questions:** Ask in Slack/Teams
- **Code Issues:** Check GitHub issues
- **Documentation:** See [README.md](./README.md)
- **Troubleshooting:** Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- **FAQ:** See [FAQ.md](./FAQ.md)

---

**Getting Started Guide Version:** 1.0  
**Last Updated:** July 20, 2026  
**Time to Complete:** ~30 minutes  
**Status:** Ready for Development ✅
