# Deployment Guide

## Pre-Deployment Checklist

Before deploying to production, complete these steps:

### 1. Environment Setup

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit with your actual values
nano .env.local
```

**Required variables**:
- `GROQ_API_KEY` - Get from https://console.groq.com/keys
- `CONTACT_EMAIL` - Your portfolio contact email
- `SENTRY_DSN` (optional) - Error tracking from https://sentry.io/

### 2. Local Testing

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
# Test chat endpoint manually

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

### 3. Verify Security Headers

```bash
# Check that security headers are present
curl -I http://localhost:3000

# Expected headers:
# - Strict-Transport-Security
# - Content-Security-Policy
# - X-Frame-Options: DENY
# - X-Content-Type-Options: nosniff
```

### 4. Test Rate Limiting

```bash
# Should succeed
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "hello"}]}'

# Run 15 times in quick succession
for i in {1..15}; do
  curl -X POST http://localhost:3000/api/chat \
    -H "Content-Type: application/json" \
    -d '{"messages": [{"role": "user", "content": "hello"}]}' &
done
wait

# Should see 429 Too Many Requests after 10th request
```

### 5. Validate Environment

```bash
npx ts-node scripts/validate-env.ts
```

## GitHub Setup

### 1. Create Vercel Secrets

These are needed for the GitHub Actions workflow to deploy to Vercel.

1. Go to your portfolio's GitHub repository
2. Settings → Secrets and variables → Actions
3. Create three new secrets:
   - `VERCEL_TOKEN` - Get from https://vercel.com/account/tokens
   - `VERCEL_ORG_ID` - Found in Vercel project settings
   - `VERCEL_PROJECT_ID` - Found in Vercel project settings

### 2. Configure GitHub Actions

The workflow is already configured in `.github/workflows/deploy.yml`.

It will:
1. Run ESLint on every push/PR
2. Type-check with TypeScript
3. Build the Next.js app
4. Run npm audit
5. Deploy to Vercel on main branch push
6. Run health checks post-deployment

## Vercel Deployment

### Option A: Git Push (Recommended)

The GitHub Actions workflow will automatically deploy when you push to `main`:

```bash
# Make changes
git add .
git commit -m "Security hardening"

# Push to main branch
git push origin main

# GitHub Actions workflow automatically triggers
# Check progress at: https://github.com/your-user/mitanshu-portfolio/actions
```

### Option B: Manual Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod --env-file=.env.local
```

## Sentry Setup (Optional but Recommended)

### 1. Create Sentry Project

1. Sign up at https://sentry.io
2. Create new project → Select "Next.js"
3. Copy the DSN value

### 2. Add to Environment

```bash
# In .env.local or Vercel dashboard
SENTRY_DSN=https://[YOUR-DSN]@sentry.io/[PROJECT-ID]
```

### 3. Test Sentry Integration

```bash
# Sentry is automatically initialized in logger.ts
# Test by triggering an error:
curl -X POST https://mitanshugoel.dev/api/chat \
  -H "Content-Type: application/json" \
  -d '{"invalid": "json"}'

# Should appear in Sentry dashboard within 1-2 minutes
```

## Post-Deployment Verification

### 1. Health Checks

```bash
curl https://mitanshugoel.dev/api/health
# Returns 200 with healthy status

curl https://mitanshugoel.dev/api/ready
# Returns 200 with ready status
```

### 2. Security Headers

```bash
curl -I https://mitanshugoel.dev
# Verify:
# ✓ Strict-Transport-Security present
# ✓ Content-Security-Policy present
# ✓ X-Frame-Options: DENY
# ✓ X-Content-Type-Options: nosniff
```

### 3. Chat Functionality

```bash
curl -X POST https://mitanshugoel.dev/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "What has Mitanshu built with ROS2?"}]}'

# Should return an answer
```

### 4. Rate Limiting

```bash
# Make 15 requests rapidly
for i in {1..15}; do
  curl -X POST https://mitanshugoel.dev/api/chat \
    -H "Content-Type: application/json" \
    -d '{"messages": [{"role": "user", "content": "test"}]}'
done

# First 10 should succeed, next 5 return 429
```

### 5. Error Handling

```bash
# Test with invalid payload
curl -X POST https://mitanshugoel.dev/api/chat \
  -H "Content-Type: application/json" \
  -d 'invalid json'

# Should return 400 with safe error message
# Check Sentry for full error details
```

## Monitoring & Maintenance

### Daily Checks

```bash
# Monitor error rates in Sentry
# https://sentry.io/dashboard

# Check Vercel deployment status
# https://vercel.com/dashboard
```

### Weekly Checks

```bash
# Update dependencies
npm update

# Audit for vulnerabilities
npm audit

# Check what's using most bandwidth
# (Vercel Analytics)
```

### Monthly Checks

```bash
# Review Sentry error trends
# Fix any recurring issues

# Update documentation if needed
# Test disaster recovery plan (redeploy from scratch)
```

## Troubleshooting

### 500 Error on Chat Endpoint

1. Check environment variables are set in Vercel:
   ```bash
   vercel env list
   ```

2. Verify Groq API key is valid

3. Check Sentry for error details

### Rate Limiting Not Working

Rate limiting is in-memory per Vercel function instance. If multiple instances, each has independent counters. This is acceptable for a portfolio.

### CORS Errors

Verify the origin header is exactly: `https://mitanshugoel.dev`

### Build Failing

```bash
npm run build  # Run locally to debug
npx tsc --noEmit  # Check TypeScript errors
npm run lint  # Check linting issues
```

## Rollback Plan

If something goes wrong:

### Rollback to Previous Version

```bash
# Option 1: Vercel Dashboard
# https://vercel.com/dashboard
# Go to Deployments tab
# Click on a previous working deployment
# Click "Promote to Production"

# Option 2: Git
git revert HEAD
git push origin main
# GitHub Actions will automatically redeploy
```

## Cost Estimation

| Component | Free Tier | Notes |
|---|---|---|
| Vercel | ✓ | Unlimited deployments, 6000 compute minutes/month |
| Groq API | ✓ | Free tier with rate limits |
| Sentry | ✓ | Free tier with 5000 events/month |
| Domain | $ | ~$10-20/year for .dev domain |
| **Total Monthly** | **Free** | **Just domain costs (~$1/month)** |

## Security Reminders

1. Never commit `.env.local` to git
2. Never expose API keys in code or error messages
3. Always use HTTPS in production
4. Monitor Sentry for errors and patterns
5. Keep dependencies updated
6. Test security headers regularly
