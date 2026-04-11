# Setup Guide

## Prerequisites

- Node.js 18.x or higher
- pnpm 10.x (or npm/yarn)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mostafa-SAID7/ELITE-FITNESS.git
cd v0-angular-tailwind-site
```

2. Install dependencies:
```bash
pnpm install --legacy-peer-deps
```

Note: The `--legacy-peer-deps` flag is required due to Angular version compatibility with Taiga UI dependencies.

## Running the Application

### Development Server

```bash
pnpm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Building for Production

```bash
pnpm run build
```

The build artifacts will be stored in the `dist/fitness-coaching/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── app.component.ts  # Root component
│   └── app.routes.ts     # Route configuration
├── styles.scss           # Global styles
├── index.html            # HTML entry point
└── main.ts              # Application entry point
```

## Technologies Used

- **Angular 18.2** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Programming language
- **Taiga UI** - UI component library
- **RxJS** - Reactive programming library

## Troubleshooting

### Peer Dependency Issues

If you encounter peer dependency warnings, use:
```bash
pnpm install --legacy-peer-deps
```

### Build Errors

Clear the Angular cache and rebuild:
```bash
rm -rf .angular/cache
pnpm run build
```

### Port Already in Use

If port 4200 is already in use, specify a different port:
```bash
pnpm start -- --port 4300
```
