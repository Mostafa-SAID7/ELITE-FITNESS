# HIT Egypt - Frequently Asked Questions

## 🚀 Getting Started

**Q: How do I set up the development environment?**  
A: See SETUP.md for complete instructions. Summary:
```bash
npm install
npm start
```

**Q: What Node version is required?**  
A: Node 18+ with npm 10+

**Q: Can I run this in Docker?**  
A: Yes! Use `docker-compose up` from the root directory.

---

## 🏗️ Architecture

**Q: Why feature-based architecture?**  
A: Scalable, maintainable, and follows Angular best practices. Each feature is independent and can be developed/deployed separately.

**Q: How do path aliases work?**  
A: Configured in tsconfig.json:
- `@app/*` → `src/app/*`
- `@core/*` → `src/app/core/*`
- `@shared/*` → `src/app/shared/*`

**Q: Where should I place new components?**  
A: - Shared components → `src/app/shared/components/`
- Feature components → `src/app/features/{feature}/components/`
- Page components → `src/app/features/{feature}/pages/`

---

## 🎨 Styling

**Q: How do I add custom styles?**  
A: - Use Tailwind classes in templates first
- Component-specific styles in `.component.scss`
- Global styles in `src/styles.scss`

**Q: How do I add a new color?**  
A: Update `tailwind.config.js` extends section:
```js
colors: {
  'brand-blue': '#0066cc'
}
```

**Q: What's the spacing system?**  
A: - `section-padding`: Full page sections (py-12 md:py-16 lg:py-20)
- `section-padding-compact`: Footer/compact areas (py-8 md:py-12 lg:py-16)
- `section-padding-reduced`: Internal sections (py-8 md:py-12 lg:py-12)

---

## 🔄 Components

**Q: How do I create a new component?**  
A: Use Angular CLI:
```bash
ng generate component features/my-feature/components/my-component
```

**Q: How do I use component inputs?**  
A: Add @Input() properties:
```typescript
@Input() title: string = '';
@Input() items: Item[] = [];
```

**Q: How do I handle component events?**  
A: Use @Output() with EventEmitter:
```typescript
@Output() clicked = new EventEmitter<void>();
```

---

## 📡 Services

**Q: How do I create a new service?**  
A: Use Angular CLI:
```bash
ng generate service services/my-service
```

**Q: How do I inject a service?**  
A: Use constructor injection:
```typescript
constructor(private myService: MyService) {}
```

**Q: How do I make API calls?**  
A: Use the ApiService in @core/services

---

## 🔐 Authentication

**Q: How does authentication work?**  
A: Phase 2 implements JWT-based authentication with:
- Login/signup endpoints
- Token refresh logic
- Auth guards on protected routes

**Q: How do I protect a route?**  
A: Add canActivate guard to route:
```typescript
{
  path: 'protected',
  canActivate: [canActivateAuth],
  component: MyComponent
}
```

---

## 🧪 Testing

**Q: How do I run tests?**  
A: ```bash
npm run test              # Run all tests
npm run test:coverage     # Generate coverage report
```

**Q: How do I write a test?**  
A: Create a `.spec.ts` file:
```typescript
describe('MyComponent', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

---

## 📊 Performance

**Q: How do I optimize bundle size?**  
A: - Use lazy-loading for routes
- Tree-shake unused code
- Use production build: `npm run build`

**Q: How do I check performance?**  
A: Run Lighthouse in Chrome DevTools or use:
```bash
npm run build -- --stats-json
npm run analyze  # webpack-bundle-analyzer
```

**Q: What's the current bundle size?**  
A: 381.45 kB (initial) → 101.97 kB (gzipped)

---

## 🐛 Debugging

**Q: How do I debug the application?**  
A: - Use Chrome DevTools
- Enable source maps in development
- Check browser console for errors

**Q: How do I access logs?**  
A: Use LoggerService:
```typescript
this.logger.debug('message');
this.logger.info('info');
this.logger.warn('warning');
this.logger.error('error');
```

---

## 📦 Build & Deployment

**Q: How do I build for production?**  
A: ```bash
npm run build
# Output: dist/fitness-coaching/
```

**Q: How do I deploy to production?**  
A: See DEPLOYMENT.md for cloud provider instructions.

**Q: How do I configure environment variables?**  
A: Update `src/environments/environment.prod.ts`

---

## 📝 Git & Version Control

**Q: What's the git workflow?**  
A: - Create feature branch: `git checkout -b feature/name`
- Make commits: `git commit -m "feat: description"`
- Push: `git push -u origin feature/name`
- Create PR for review

**Q: How do I revert a commit?**  
A: ```bash
git revert <commit-hash>
# or
git reset --hard HEAD~1  # for unpushed commits
```

---

## 🚀 Advanced

**Q: How do I add a new feature module?**  
A: - Create folder in `src/app/features/my-feature/`
- Add pages/, components/, services/, models/ folders
- Create routes file
- Add barrel export (index.ts)

**Q: How do I implement lazy loading?**  
A: Routes automatically lazy-load feature modules:
```typescript
{
  path: 'my-feature',
  loadChildren: () => import('./features/my-feature/my-feature.routes')
}
```

**Q: How do I use signals for state management?**  
A: Create signals in services:
```typescript
private count = signal(0);
count.set(count() + 1);
```

---

## ❓ Still Have Questions?

- Check the documentation files in `/docs`
- Review REFACTORING_GUIDE.md
- Check ARCHITECTURE.md
- See DATABASE_SCHEMA.md for data structure
- Review API_REFERENCE.md for API endpoints

---

**Last Updated:** July 20, 2026  
**Version:** 1.0
