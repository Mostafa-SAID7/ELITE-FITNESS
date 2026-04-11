# Vercel Deployment Setup

## Automatic Deployment (Already Configured!)

Your app is already set up for automatic deployment using **Vercel's native GitHub integration**.

### How It Works

Every time you push to the `main` branch:
1. Vercel automatically detects the push
2. Vercel builds your app using `vercel.json` configuration
3. Your app is deployed to https://elite-fitness-drab.vercel.app
4. ✅ Done!

### Verify It's Working

1. Go to https://vercel.com/dashboard
2. Click on your Elite Fitness project
3. Go to **Deployments** tab
4. You should see recent deployments from GitHub pushes

### Manual Deployment

If you need to deploy manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

### Environment Variables

If your app needs environment variables:

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy the project

### Rollback

To rollback to a previous deployment:

1. Go to Vercel project dashboard
2. Click on "Deployments"
3. Find the deployment you want to rollback to
4. Click the three dots menu
5. Select "Promote to Production"

### Monitoring

Monitor your deployments:

1. **Vercel Dashboard**: https://vercel.com/dashboard
2. **Application Logs**: Vercel project → Deployments → Logs
3. **GitHub**: Repository → Deployments tab

### Troubleshooting

#### Deployment fails

1. Check Vercel deployment logs
2. Run `npx vercel inspect <deployment-id> --logs`
3. Verify `vercel.json` configuration
4. Check build command: `pnpm run build`

#### Build fails on Vercel but works locally

1. Check Node.js version matches (18.x)
2. Verify pnpm version (10.x)
3. Check environment variables are set
4. Review build logs in Vercel dashboard

#### Site doesn't update after deployment

1. Clear browser cache (Ctrl+Shift+Delete)
2. Wait a few minutes for CDN to update
3. Check Vercel deployment status

### Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [Vercel Status Page](https://www.vercel-status.com/)

### Support

For deployment issues:
1. Check Vercel status page
2. Review Vercel deployment logs
3. Contact Vercel support
4. Open an issue on GitHub
