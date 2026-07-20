## Deployment Options

### 1. Netlify (Recommended)

### Prerequisites

- Netlify account (https://netlify.com)
- GitHub repository connected to Netlify

### Automatic Deployment

The application is configured for automatic deployment on Netlify using GitHub integration:

1. Push changes to the `main` branch
2. Netlify automatically detects the push
3. Build process starts automatically
4. Application is deployed to production

### Manual Deployment

If you need to manually deploy:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from project directory
netlify deploy --prod
```

### Configuration

Netlify configuration is defined in `netlify.toml`:

```toml
[build]
  publish = "dist/fitness-coaching/browser"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables

If you need environment variables:

1. Go to Netlify site settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy the project

### Troubleshooting

#### Build Fails with Dependency Errors

The build uses `npm install` which respects the lock file. If you get dependency errors:

1. Ensure `package-lock.json` is up to date
2. Run locally: `npm install`
3. Commit the updated lock file

#### Build Fails with "Command not found"

This error occurs when Netlify can't find the build command:

1. Go to Netlify site settings
2. Check "Build & Deploy" settings
3. Ensure build command is set to `npm run build`
4. Ensure publish directory is set to `dist/fitness-coaching/browser`
5. Save and redeploy

#### Deployment URL

After successful deployment, your application will be available at:
- Production: `https://elite-fitness73.netlify.app`
- Preview: Generated for each pull request


For Docker deployment details, see **[DOCKER.md](./DOCKER.md)**.

## 2. GitHub Actions CI/CD

The project includes GitHub Actions workflows for:

- **Build Verification**: Runs on every push and pull request
- **Linting**: TypeScript type checking
- **Docker Build**: Builds and pushes Docker images (optional)

Workflows are located in `.github/workflows/`

## Production Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] Build completes without errors
- [ ] No console errors or warnings
- [ ] Environment variables are configured
- [ ] SSL certificate is valid
- [ ] Performance metrics are acceptable
- [ ] SEO meta tags are in place
- [ ] Analytics are configured

## Rollback

If you need to rollback to a previous version:

1. Go to Netlify site dashboard
2. Navigate to "Deploys"
3. Find the previous successful deployment
4. Click "Publish deploy"

## Monitoring

Monitor your deployment:

1. Netlify Analytics: https://app.netlify.com/sites/elite-fitness73/analytics
2. Application Logs: Available in Netlify site settings
3. Error Tracking: Configure in Netlify settings
