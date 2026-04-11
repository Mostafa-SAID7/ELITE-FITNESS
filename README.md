# Elite Fitness - Professional Fitness Coaching Website

A modern, responsive fitness coaching website built with Angular 18, Tailwind CSS, and TypeScript. Designed to showcase fitness services, coaching programs, and client testimonials.

## 🌟 Features

- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Modern Stack** - Angular 18 with standalone components
- ✅ **Tailwind CSS** - Utility-first CSS framework for rapid development
- ✅ **Performance Optimized** - Lazy-loaded routes, code splitting, minification
- ✅ **SEO Ready** - Meta tags, Open Graph, structured data
- ✅ **Accessibility** - WCAG compliant, semantic HTML, keyboard navigation
- ✅ **Production Ready** - Fully tested and optimized for deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- pnpm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/ELITE-FITNESS.git
cd ELITE-FITNESS

# Install dependencies
pnpm install

# Start development server
pnpm start
```

The app will be available at `http://localhost:4200/`

## 🌐 Live Demo

**[View Live Application](https://elite-fitness-drab.vercel.app)**

Deployed on Vercel with automatic CI/CD from GitHub

## 📦 Build

### Development Build
```bash
pnpm start
```

### Production Build
```bash
pnpm run build
```

Output: `dist/fitness-coaching`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── header/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── testimonials/
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── home/
│   │   ├── services/
│   │   ├── about/
│   │   └── contact/
│   ├── app.component.ts    # Root component
│   └── app.routes.ts       # Route configuration
├── assets/                 # Static assets
├── styles.scss            # Global styles
├── main.ts                # Entry point
└── index.html             # HTML template
```

## 🛣️ Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - For advanced styling and variables
- **Responsive** - Mobile-first design approach
- **Dark Theme** - Modern dark color scheme with red accents

## 📚 Documentation

- [Setup Guide](./docs/SETUP.md) - Installation and development setup
- [Architecture](./docs/ARCHITECTURE.md) - Project structure and design patterns
- [Deployment Guide](./docs/DEPLOYMENT.md) - Vercel deployment and CI/CD setup

## 🚢 Deployment

### Automatic Deployment to Vercel

The app is automatically deployed to Vercel on every push to the main branch using Vercel's native GitHub integration.

**Live App:** https://elite-fitness-drab.vercel.app

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

For detailed deployment instructions, see [Deployment Guide](./docs/DEPLOYMENT.md)

## 🔧 Technologies

- **Angular 18** - Frontend framework
- **TypeScript** - Programming language
- **Tailwind CSS** - Utility-first CSS
- **Taiga UI** - Component library
- **RxJS** - Reactive programming
- **pnpm** - Package manager

## 📊 Bundle Size

| Bundle | Size | Gzipped |
|--------|------|---------|
| Initial | 347.50 kB | 94.59 kB |
| Contact | 50.61 kB | 11.63 kB |
| Home | 20.28 kB | 5.23 kB |
| Services | 11.99 kB | 3.67 kB |
| About | 8.05 kB | 2.72 kB |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Mostafa SAID**
- GitHub: [@Mostafa-SAID7](https://github.com/Mostafa-SAID7)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@elitefitness.com or open an issue on GitHub.

## 🔗 Links

- [Live Demo](https://elite-fitness-drab.vercel.app)
- [GitHub Repository](https://github.com/Mostafa-SAID7/ELITE-FITNESS)
- [Documentation](./docs)
- [Vercel Project](https://vercel.com/mostafa-said7/elite-fitness)

---

**Made with ❤️ by Elite Fitness Team**
