# Vercel Deployment Setup

## Quick Setup for Automatic Deployment

The easiest way to enable automatic deployment is to use Vercel's native GitHub integration.

### Option 1: Vercel GitHub Integration (Recommended - No Secrets Needed)

1. Go to https://vercel.com/dashboard
2. Click on your Elite Fitness project
3. Go to Settings → Git
4. Ensure GitHub is connected
5. Enable "Automatic Deployments" for the main branch
6. Done! Every push to main will auto-deploy

### Option 2: GitHub Actions with Secrets (Manual Setup)

If you want to use GitHub Actions, follow these steps:

#### Step 1: Get Your Vercel Credentials

**VERCEL_TOKEN**
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it "GitHub Actions"
4. Copy the token

**VERCEL_ORG_ID**
1. Go to https://vercel.com/dashboard
2. Look at the URL: `https://vercel.com/teams/YOUR_ORG_ID`
3. Copy the `YOUR_ORG_ID` part

**VERCEL_PROJECT_ID**
1. Go to your Elite Fitness project in Vercel
2. Click "Settings"
3. Copy the "Project ID"

#### Step 2: Add GitHub Secrets

1. Go to your GitHub repository: https://github.com/Mostafa-SAID7/ELITE-FITNESS
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add these three secrets:

| Secret Name | Value |
|-------------|-------|
| VERCEL_TOKEN | Your token from Step 1 |
| VERCEL_ORG_ID | Your org ID from Step 1 |
| VERCEL_PROJECT_ID | Your project ID from Step 1 |

#### Step 3: Test the Deployment

1. Make a small change to the repository
2. Push to the main branch
3. Go to GitHub Actions tab
4. Watch the "Deploy to Vercel" workflow
5. Once complete, check https://elite-fitness-drab.vercel.app

### Troubleshooting

**Workflow fails with "Input required and not supplied: vercel-token"**
- GitHub secrets are not set up
- Go to Settings → Secrets and add VERCEL_TOKEN
- Or use Option 1 (Vercel GitHub Integration) instead

**Workflow fails with "Invalid token"**
- Verify VERCEL_TOKEN is correct
- Regenerate token if needed

**Workflow fails with "Project not found"**
- Verify VERCEL_PROJECT_ID is correct
- Ensure project exists in Vercel

**Deployment succeeds but site doesn't update**
- Clear browser cache
- Wait a few minutes for CDN to update
- Check Vercel deployment logs

### Useful Commands

```bash
# Test build locally
pnpm run build

# Deploy manually to Vercel
npm install -g vercel
vercel --prod
```

### Support

For issues:
1. Check Vercel status: https://www.vercel-status.com/
2. Review GitHub Actions logs
3. Check Vercel deployment logs
4. Open an issue on GitHub
