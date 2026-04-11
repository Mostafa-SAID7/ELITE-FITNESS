# Deployment Guide

## Vercel Deployment

### Prerequisites

- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel

### Automatic Deployment

The application is configured for automatic deployment on Vercel using GitHub integration:

1. Push changes to the `main` branch
2. Vercel automatically detects the push
3. Build process starts automatically
4. Application is deployed to production

### Manual Deployment

If you need to manually deploy:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel
```

### Configuration

Vercel configuration is defined in `vercel.json`:

```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist/fitness-coaching",
  "installCommand": "pnpm install",
  "framework": "angular"
}
```

### Environment Variables

If you need environment variables:

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy the project

### Troubleshooting

#### Build Fails with Peer Dependency Errors

The build uses `pnpm install` which respects the lock file. If you get peer dependency errors:

1. Ensure `pnpm-lock.yaml` is up to date
2. Run locally: `pnpm install --legacy-peer-deps`
3. Commit the updated lock file

#### Build Fails with "Base directory does not exist"

This error occurs when Vercel's project settings point to the wrong directory:

1. Go to Vercel project settings
2. Check "Root Directory" setting
3. Ensure it's set to the correct path (should be empty for root or `v0-angular-tailwind-site` if in subdirectory)
4. Save and redeploy

#### Deployment URL

After successful deployment, your application will be available at:
- Production: `https://elite-fitness-drab.vercel.app`
- Preview: Generated for each pull request

## Docker Deployment

### Build Docker Image

```bash
docker build -t elite-fitness:latest .
```

### Run Docker Container

```bash
docker run -p 80:80 elite-fitness:latest
```

Access the application at `http://localhost`

### Docker Compose

```bash
docker-compose up -d
```

See `docs/DOCKER.md` for detailed Docker instructions.

## GitHub Actions CI/CD

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

1. Go to Vercel project dashboard
2. Navigate to "Deployments"
3. Find the previous successful deployment
4. Click "Promote to Production"

## Monitoring

Monitor your deployment:

1. Vercel Analytics: https://vercel.com/dashboard
2. Application Logs: Available in Vercel project settings
3. Error Tracking: Configure in Vercel settings
