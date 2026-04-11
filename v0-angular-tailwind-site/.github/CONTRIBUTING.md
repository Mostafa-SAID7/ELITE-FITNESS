# Contributing to ELITE FITNESS

Thank you for your interest in contributing to ELITE FITNESS! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions with other contributors.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/ELITE-FITNESS.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `pnpm install --legacy-peer-deps`
5. Make your changes
6. Commit your changes: `git commit -m "feat: description of changes"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Development Setup

### Prerequisites

- Node.js 18.x or higher
- pnpm 10.x

### Installation

```bash
pnpm install --legacy-peer-deps
```

### Running the Application

```bash
pnpm start
```

Navigate to `http://localhost:4200/`

### Building for Production

```bash
pnpm run build
```

## Commit Message Guidelines

Follow the Conventional Commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding or updating tests
- `chore`: Changes to build process, dependencies, etc.

### Examples

```
feat(header): add mobile navigation menu
fix(contact): resolve form validation issue
docs: update setup instructions
```

## Pull Request Process

1. Update the README.md with any new features or changes
2. Update documentation in `docs/` folder if applicable
3. Ensure all tests pass: `pnpm run build`
4. Ensure TypeScript compilation succeeds: `npx tsc --noEmit`
5. Request review from maintainers
6. Address any feedback or requested changes

## Code Style

- Use TypeScript for all code
- Follow Angular style guide: https://angular.io/guide/styleguide
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Formatting

The project uses Prettier for code formatting. Format your code before committing:

```bash
npx prettier --write "src/**/*.ts"
```

## Testing

While the project doesn't have automated tests yet, please:

1. Test your changes locally
2. Verify the build completes without errors
3. Check for TypeScript errors
4. Test in different browsers if applicable

## Documentation

- Update `docs/` files for architectural changes
- Update README.md for user-facing changes
- Add comments to complex code sections
- Keep documentation up-to-date with code changes

## Reporting Issues

Use the GitHub issue templates:

- **Bug Report**: For reporting bugs
- **Feature Request**: For suggesting new features

Include:

- Clear description of the issue
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details (OS, browser, Node version)
- Screenshots if applicable

## Questions?

Feel free to open an issue with the `question` label or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Recognition

Contributors will be recognized in the project README and release notes.

Thank you for contributing to ELITE FITNESS!
