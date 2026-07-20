<div align="center">

![HIT Egypt](https://img.shields.io/badge/HIT%20Egypt-Fitness%20Coaching-ff0000?style=for-the-badge)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/Mostafa-SAID7/ELITE-FITNESS)
[![License MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![Angular 18](https://img.shields.io/badge/Angular-18-dd0031?style=flat-square)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=flat-square)](https://www.typescriptlang.org)

# 🏋️ HIT Egypt

**Professional Fitness Coaching Platform** — Modern, responsive, production-ready

[Live Demo](https://hitegypt.com) • [Documentation](./docs/INDEX.md) • [Report Bug](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues) • [Request Feature](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues)

---

</div>

## ✨ Highlights

| Feature | Details |
|---------|---------|
| 🎯 **Modern Stack** | Angular 18 standalone components, TypeScript, Tailwind CSS |
| 📱 **Responsive** | Mobile-first design, tested on all major devices |
| ⚡ **Performance** | Optimized bundle (381 KB), lazy loading, code splitting |
| 🔍 **SEO Ready** | Meta tags, Open Graph, JSON-LD structured data, sitemap |
| ♿ **Accessible** | WCAG 2.1 compliant, semantic HTML, keyboard navigation |
| 🔒 **Secure** | OWASP compliance, CSP headers, input validation |
| 📊 **Enterprise** | 15 components, database schema, monitoring ready |

## 🚀 Quick Start

### Prerequisites
```
Node.js 18.x+  |  npm 9.x+
```

### Setup (60 seconds)

```bash
# Clone repository
git clone https://github.com/Mostafa-SAID7/ELITE-FITNESS.git && cd ELITE-FITNESS

# Install & start
npm install && npm start
```

→ Open **http://localhost:4200**

### Build for Production

```bash
npm run build    # Output: dist/fitness-coaching (381 KB total)
npm run build:prod  # Production optimization
```

---

## 📚 Documentation Hub

Start here for comprehensive guides:

| Document | Purpose |
|----------|---------|
| **[📖 INDEX](./docs/INDEX.md)** | **Navigation hub for all documentation** |
| [🚀 Getting Started](./docs/GETTING_STARTED.md) | First-time setup and local development |
| [🏗️ Architecture](./docs/ARCHITECTURE.md) | Project structure, design patterns, component hierarchy |
| [📋 Setup Guide](./docs/SETUP.md) | Detailed environment configuration |
| [🌐 Deployment](./docs/DEPLOYMENT.md) | Netlify deployment, CI/CD, environment variables |
| [🐳 Docker](./docs/DOCKER.md) | Containerization, Docker Compose setup |

### 📋 Project Guides

| Document | For | Purpose |
|----------|-----|---------|
| [💼 Client Delivery](./docs/CLIENT_DELIVERY.md) | Stakeholders | Project overview, deliverables, timeline |
| [🗓️ Project Timeline](./docs/PROJECT_TIMELINE.md) | Managers | Phases, milestones, deadlines |
| [💰 Cost Analysis](./docs/COST_ANALYSIS.md) | Finance | Budget breakdown, resource allocation |
| [🛣️ Roadmap](./docs/ROADMAP.md) | Product | Features phases 1-6, future vision |

### 🔧 Technical References

| Document | For | Content |
|----------|-----|---------|
| [🛢️ Database Schema](./docs/DATABASE_SCHEMA.md) | Backend | 12 tables, ER diagram, relationships |
| [🔌 API Reference](./docs/API_REFERENCE.md) | Developers | Endpoints, request/response formats (Phase 2+) |
| [🎨 Design System](./docs/DESIGN_SYSTEM.md) | Designers | Colors, spacing, typography, components |
| [📊 SEO Guide](./docs/SEO_PRODUCTION_GUIDE.md) | SEO | Meta tags, sitemaps, structured data |

### 🛡️ Operations & Support

| Document | For | Content |
|----------|-----|---------|
| [🔐 Security](./docs/SECURITY.md) | DevOps/Security | OWASP, encryption, auth, best practices |
| [📈 Monitoring](./docs/MONITORING.md) | Ops | Metrics, alerts, performance tracking |
| [❓ FAQ](./docs/FAQ.md) | Everyone | Common questions and answers |
| [🔧 Troubleshooting](./docs/TROUBLESHOOTING.md) | Support | Common issues and solutions |
| [📖 Glossary](./docs/GLOSSARY.md) | New Users | Terminology and definitions |

---

## 🎯 Key Features

### 🎨 Frontend
- ✅ Angular 18 with standalone components
- ✅ Tailwind CSS + SCSS for styling
- ✅ RxJS reactive programming
- ✅ Dynamic routing with lazy loading
- ✅ Form validation and error handling
- ✅ State management ready

### 🚀 Performance & SEO
- ✅ Optimized bundle size (381 KB)
- ✅ Lazy-loaded route bundles
- ✅ Meta tags and Open Graph
- ✅ JSON-LD structured data
- ✅ Automatic sitemap generation
- ✅ robots.txt for crawlers

### 🔒 Security & Quality
- ✅ Content Security Policy headers
- ✅ OWASP compliance checks
- ✅ Input validation
- ✅ XSS/CSRF protection
- ✅ Accessibility (WCAG 2.1)
- ✅ TypeScript strict mode

### 📱 Responsive & Accessible
- ✅ Mobile-first design
- ✅ Touch-friendly UI
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast mode compatible
- ✅ Semantic HTML

---

## 📊 Project Metrics

```
Build Status:      ✅ Passing (Exit Code 0)
Bundle Size:       381.45 kB (101.97 kB gzipped)
TypeScript:        Strict mode enabled
Accessibility:     WCAG 2.1 Level AA
Performance:       Optimized for Core Web Vitals
Components:        15 enterprise components
Documentation:     20 comprehensive guides
```

### Routes Map

```
/                  → Home page (hero, services, testimonials)
/about             → About page (company story, team, values)
/services          → Services page (program details, pricing)
/contact           → Contact page (form, inquiry handling)
/testimonials      → Member stories and success stories
```

---

## 🏗️ Project Structure

```
ELITE-FITNESS/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   ├── features/            # Feature modules
│   │   ├── shared/              # Shared services & utilities
│   │   ├── core/                # Core services (SEO, Auth, etc.)
│   │   ├── app.component.ts     # Root component
│   │   └── app.routes.ts        # Route configuration
│   ├── assets/
│   │   ├── favicon.svg          # Favicon (red gradient circle)
│   │   └── images/              # Static images
│   ├── index.html               # Main template with SEO meta tags
│   ├── styles.scss              # Global styles
│   └── main.ts                  # Entry point
├── public/
│   ├── robots.txt               # Search engine crawling rules
│   ├── sitemap.xml              # URL map for indexing
│   └── manifest.json            # PWA configuration
├── docs/                        # Comprehensive documentation (20 files)
├── angular.json                 # Angular CLI config
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies & scripts
```

---

## 🌐 Live Application

### Deployment

**Live URL:** [https://hitegypt.com](https://hitegypt.com)

**Deployment Method:** Automatic CI/CD from GitHub → Netlify

### Environment Variables

See [.env.example](./.env.example) for required variables:

```bash
# Copy and configure
cp .env.example .env.local
```

---

## 🔧 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Angular 18 with standalone components |
| **Language** | TypeScript 5.2 (strict mode) |
| **Styling** | Tailwind CSS + SCSS |
| **Routing** | Angular Router with lazy loading |
| **State** | RxJS Observables |
| **Build Tool** | Vite (via Angular CLI) |
| **Package Manager** | npm 9+ |
| **Deployment** | Netlify with CI/CD |
| **Monitoring** | Netlify Analytics |

---

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Latest | Full support |
| Firefox | ✅ Latest | Full support |
| Safari | ✅ Latest | Full support |
| Edge | ✅ Latest | Full support |
| IE 11 | ❌ Not supported | Unsupported |

---

## ♿ Accessibility

Our commitment to accessibility:

- ✅ **WCAG 2.1 Level AA** compliant
- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Esc)
- ✅ Color contrast ratios > 4.5:1
- ✅ Screen reader tested
- ✅ Focus indicators visible

---

## 📦 Dependencies

### Core Framework
- `@angular/*` (18.x) - Framework and router
- `typescript` (5.2) - Language support
- `rxjs` (7.x) - Reactive programming

### Styling
- `tailwindcss` (3.x) - Utility-first CSS
- `sass` - SCSS support

### Development Tools
- `@angular/cli` - Build and development
- `ng-packagr` - Library packaging

For complete list, see [package.json](./package.json)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for detailed guidelines.

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

```
MIT License - 2024 - HIT Egypt Team
Permission is hereby granted, free of charge...
(See LICENSE file for full text)
```

---

## 👤 Author

**Mostafa SAID**

- 🔗 GitHub: [@Mostafa-SAID7](https://github.com/Mostafa-SAID7)
- 💼 LinkedIn: [Profile](https://linkedin.com/in/mostafa-said7)

---

## 📞 Support & Contact

### Get Help

- 📖 **Documentation:** [See docs folder](./docs)
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/Mostafa-SAID7/ELITE-FITNESS/discussions)
- 📧 **Email:** support@hitegypt.com

### Resources

- [Angular Documentation](https://angular.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Netlify Docs](https://docs.netlify.com)

---

## 🔗 Important Links

| Link | Purpose |
|------|---------|
| [Live Application](https://hitegypt.com) | View the application |
| [Documentation Hub](./docs/INDEX.md) | All guides and references |
| [GitHub Repository](https://github.com/Mostafa-SAID7/ELITE-FITNESS) | Source code |
| [GitHub Issues](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues) | Bug reports & features |
| [Netlify Project](https://app.netlify.com/sites/elite-fitness73) | Deployment status |

---

<div align="center">

### 🌟 Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

Made with ❤️ by **HIT Egypt Team** | © 2024 | All Rights Reserved

[Report Bug](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues) • [Request Feature](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues)

</div>
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/Mostafa-SAID7/ELITE-FITNESS)
[![License MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![Angular 18](https://img.shields.io/badge/Angular-18-dd0031?style=flat-square)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=flat-square)](https://www.typescriptlang.org)

# 🏋️ Elite Fitness

**Professional Fitness Coaching Website** — Modern, responsive, production-ready

[Live Demo](https://elite-fitness73.netlify.app) • [Documentation](./docs/INDEX.md) • [Report Bug](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues) • [Request Feature](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues)

---

</div>

## ✨ Highlights

| Feature | Details |
|---------|---------|
| 🎯 **Modern Stack** | Angular 18 standalone components, TypeScript, Tailwind CSS |
| 📱 **Responsive** | Mobile-first design, tested on all major devices |
| ⚡ **Performance** | Optimized bundle (381 KB), lazy loading, code splitting |
| 🔍 **SEO Ready** | Meta tags, Open Graph, JSON-LD structured data, sitemap |
| ♿ **Accessible** | WCAG 2.1 compliant, semantic HTML, keyboard navigation |
| 🔒 **Secure** | OWASP compliance, CSP headers, input validation |
| 📊 **Enterprise** | 15 components, database schema, monitoring ready |

## 🚀 Quick Start

### Prerequisites
```
Node.js 18.x+  |  npm 9.x+
```

### Setup (60 seconds)

```bash
# Clone repository
git clone https://github.com/Mostafa-SAID7/ELITE-FITNESS.git && cd ELITE-FITNESS

# Install & start
npm install && npm start
```

→ Open **http://localhost:4200**

### Build for Production

```bash
npm run build    # Output: dist/fitness-coaching (381 KB total)
npm run build:prod  # Production optimization
```

---

## 📚 Documentation Hub

Start here for comprehensive guides:

| Document | Purpose |
|----------|---------|
| **[📖 INDEX](./docs/INDEX.md)** | **Navigation hub for all documentation** |
| [🚀 Getting Started](./docs/GETTING_STARTED.md) | First-time setup and local development |
| [🏗️ Architecture](./docs/ARCHITECTURE.md) | Project structure, design patterns, component hierarchy |
| [📋 Setup Guide](./docs/SETUP.md) | Detailed environment configuration |
| [🌐 Deployment](./docs/DEPLOYMENT.md) | Netlify deployment, CI/CD, environment variables |
| [🐳 Docker](./docs/DOCKER.md) | Containerization, Docker Compose setup |

### 📋 Project Guides

| Document | For | Purpose |
|----------|-----|---------|
| [💼 Client Delivery](./docs/CLIENT_DELIVERY.md) | Stakeholders | Project overview, deliverables, timeline |
| [🗓️ Project Timeline](./docs/PROJECT_TIMELINE.md) | Managers | Phases, milestones, deadlines |
| [💰 Cost Analysis](./docs/COST_ANALYSIS.md) | Finance | Budget breakdown, resource allocation |
| [🛣️ Roadmap](./docs/ROADMAP.md) | Product | Features phases 1-6, future vision |

### 🔧 Technical References

| Document | For | Content |
|----------|-----|---------|
| [🛢️ Database Schema](./docs/DATABASE_SCHEMA.md) | Backend | 12 tables, ER diagram, relationships |
| [🔌 API Reference](./docs/API_REFERENCE.md) | Developers | Endpoints, request/response formats (Phase 2+) |
| [🎨 Design System](./docs/DESIGN_SYSTEM.md) | Designers | Colors, spacing, typography, components |
| [📊 SEO Guide](./docs/SEO_PRODUCTION_GUIDE.md) | SEO | Meta tags, sitemaps, structured data |

### 🛡️ Operations & Support

| Document | For | Content |
|----------|-----|---------|
| [🔐 Security](./docs/SECURITY.md) | DevOps/Security | OWASP, encryption, auth, best practices |
| [📈 Monitoring](./docs/MONITORING.md) | Ops | Metrics, alerts, performance tracking |
| [❓ FAQ](./docs/FAQ.md) | Everyone | Common questions and answers |
| [🔧 Troubleshooting](./docs/TROUBLESHOOTING.md) | Support | Common issues and solutions |
| [📖 Glossary](./docs/GLOSSARY.md) | New Users | Terminology and definitions |

---

## 🎯 Key Features

### 🎨 Frontend
- ✅ Angular 18 with standalone components
- ✅ Tailwind CSS + SCSS for styling
- ✅ RxJS reactive programming
- ✅ Dynamic routing with lazy loading
- ✅ Form validation and error handling
- ✅ State management ready

### 🚀 Performance & SEO
- ✅ Optimized bundle size (381 KB)
- ✅ Lazy-loaded route bundles
- ✅ Meta tags and Open Graph
- ✅ JSON-LD structured data
- ✅ Automatic sitemap generation
- ✅ robots.txt for crawlers

### 🔒 Security & Quality
- ✅ Content Security Policy headers
- ✅ OWASP compliance checks
- ✅ Input validation
- ✅ XSS/CSRF protection
- ✅ Accessibility (WCAG 2.1)
- ✅ TypeScript strict mode

### 📱 Responsive & Accessible
- ✅ Mobile-first design
- ✅ Touch-friendly UI
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast mode compatible
- ✅ Semantic HTML

---

## 📊 Project Metrics

```
Build Status:      ✅ Passing (Exit Code 0)
Bundle Size:       381.45 kB (101.97 kB gzipped)
TypeScript:        Strict mode enabled
Accessibility:     WCAG 2.1 Level AA
Performance:       Optimized for Core Web Vitals
Components:        15 enterprise components
Documentation:     20 comprehensive guides
```

### Routes Map

```
/                  → Home page (hero, services, testimonials)
/about             → About page (company story, team, values)
/services          → Services page (program details, pricing)
/contact           → Contact page (form, inquiry handling)
```

---

## 🏗️ Project Structure

```
ELITE-FITNESS/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   ├── features/            # Feature modules
│   │   ├── shared/              # Shared services & utilities
│   │   ├── core/                # Core services (SEO, Auth, etc.)
│   │   ├── app.component.ts     # Root component
│   │   └── app.routes.ts        # Route configuration
│   ├── assets/
│   │   ├── favicon.svg          # Favicon (red gradient circle)
│   │   └── images/              # Static images
│   ├── index.html               # Main template with SEO meta tags
│   ├── styles.scss              # Global styles
│   └── main.ts                  # Entry point
├── public/
│   ├── robots.txt               # Search engine crawling rules
│   ├── sitemap.xml              # URL map for indexing
│   └── manifest.json            # PWA configuration
├── docs/                        # Comprehensive documentation (20 files)
├── angular.json                 # Angular CLI config
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies & scripts
```

---

## 🌐 Live Application

### Deployment

**Live URL:** [https://elite-fitness73.netlify.app](https://elite-fitness73.netlify.app)

**Deployment Method:** Automatic CI/CD from GitHub → Netlify

### Environment Variables

See [.env.example](./.env.example) for required variables:

```bash
# Copy and configure
cp .env.example .env.local
```

---

## 🔧 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Angular 18 with standalone components |
| **Language** | TypeScript 5.2 (strict mode) |
| **Styling** | Tailwind CSS + SCSS |
| **Routing** | Angular Router with lazy loading |
| **State** | RxJS Observables |
| **Build Tool** | Vite (via Angular CLI) |
| **Package Manager** | npm 9+ |
| **Deployment** | Netlify with CI/CD |
| **Monitoring** | Netlify Analytics |

---

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Latest | Full support |
| Firefox | ✅ Latest | Full support |
| Safari | ✅ Latest | Full support |
| Edge | ✅ Latest | Full support |
| IE 11 | ❌ Not supported | Unsupported |

---

## ♿ Accessibility

Our commitment to accessibility:

- ✅ **WCAG 2.1 Level AA** compliant
- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Esc)
- ✅ Color contrast ratios > 4.5:1
- ✅ Screen reader tested
- ✅ Focus indicators visible

---

## 📦 Dependencies

### Core Framework
- `@angular/*` (18.x) - Framework and router
- `typescript` (5.2) - Language support
- `rxjs` (7.x) - Reactive programming

### Styling
- `tailwindcss` (3.x) - Utility-first CSS
- `sass` - SCSS support

### Development Tools
- `@angular/cli` - Build and development
- `ng-packagr` - Library packaging

For complete list, see [package.json](./package.json)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for detailed guidelines.

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

```
MIT License - 2024 - Elite Fitness Team
Permission is hereby granted, free of charge...
(See LICENSE file for full text)
```

---

## 👤 Author

**Mostafa SAID**

- 🔗 GitHub: [@Mostafa-SAID7](https://github.com/Mostafa-SAID7)
- 💼 LinkedIn: [Profile](https://linkedin.com/in/mostafa-said7)

---

## 📞 Support & Contact

### Get Help

- 📖 **Documentation:** [See docs folder](./docs)
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/Mostafa-SAID7/ELITE-FITNESS/discussions)
- 📧 **Email:** support@elitefitness.com

### Resources

- [Angular Documentation](https://angular.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Netlify Docs](https://docs.netlify.com)

---

## 🔗 Important Links

| Link | Purpose |
|------|---------|
| [Live Demo](https://elite-fitness73.netlify.app) | View the application |
| [Documentation Hub](./docs/INDEX.md) | All guides and references |
| [GitHub Repository](https://github.com/Mostafa-SAID7/ELITE-FITNESS) | Source code |
| [GitHub Issues](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues) | Bug reports & features |
| [Netlify Project](https://app.netlify.com/sites/elite-fitness73) | Deployment status |

---

<div align="center">

### 🌟 Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

Made with ❤️ by **Elite Fitness Team** | © 2024 | All Rights Reserved

[Report Bug](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues) • [Request Feature](https://github.com/Mostafa-SAID7/ELITE-FITNESS/issues)

</div>
