# Deployment Guide

This guide covers the CI/CD pipeline setup and deployment process for Byton Finance.

## 🚀 CI/CD Pipeline Overview

The project uses GitHub Actions for continuous integration and deployment with the following workflow:

### Main Workflow (`ci-cd.yml`)
- **Triggers**: Push to `main` or `develop` branches, PRs to `main`
- **Jobs**:
  1. **Test & Quality Checks** - ESLint, TypeScript validation
  2. **Build Application** - Next.js build with caching
  3. **Security Scan** - npm audit, CodeQL analysis
  4. **Deploy Production** - Deploy to Vercel (main branch only)
  5. **Deploy Staging** - Deploy to Vercel (develop branch only)

### Preview Workflow (`preview.yml`)
- **Triggers**: Pull request events
- **Jobs**:
  1. **Quick Validation** - Fast lint, type check, build
  2. **Deploy Preview** - Deploy preview to Vercel with PR comments

## 🔧 Setup Instructions

### 1. Repository Secrets

Add these secrets to your GitHub repository settings:

```bash
# Vercel Configuration
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_vercel_org_id_here
VERCEL_PROJECT_ID=your_vercel_project_id_here

# Optional: Database and other services
DATABASE_URL=your_production_database_url
LOAN_API_KEY=your_loan_api_key
CREDIT_CHECK_API_KEY=your_credit_check_api_key
```

### 2. Vercel Setup

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel@latest
   ```

2. **Get your credentials**:
   ```bash
   # Get your token
   vercel login
   vercel tokens create

   # Get project and org IDs
   vercel link
   cat .vercel/project.json
   ```

3. **Configure environment variables** in Vercel dashboard:
   - Go to your Vercel project settings
   - Add environment variables for production, staging, and preview

### 3. Branch Strategy

- **`main`** - Production deployments (auto-deploy to production)
- **`develop`** - Staging deployments (auto-deploy to staging)
- **Feature branches** - Preview deployments (deploy on PR)

## 📦 Deployment Process

### Automatic Deployments

1. **Production**: Push to `main` branch
   ```bash
   git push origin main
   ```

2. **Staging**: Push to `develop` branch
   ```bash
   git push origin develop
   ```

3. **Preview**: Create/update pull request
   ```bash
   git push origin feature/your-feature
   # Then create PR via GitHub
   ```

### Manual Deployment

If needed, you can deploy manually:

```bash
# Production
vercel --prod

# Staging/Preview
vercel
```

## 🔍 Monitoring

### Build Status
- Check GitHub Actions tab for pipeline status
- Failed builds will block deployments
- Security scans run on every deployment

### Deployment URLs
- **Production**: https://your-domain.vercel.app
- **Staging**: https://your-domain-git-develop.vercel.app
- **Preview**: Unique URL for each PR (commented automatically)

## 🛡️ Security Features

- **CodeQL Analysis** - Automatic security scanning
- **Dependency Audit** - npm audit checks
- **Security Headers** - Configured in `vercel.json`
- **Environment Isolation** - Separate envs for prod/staging/preview

## ⚡ Performance Optimizations

- **Build Caching** - Dependencies and Next.js cache
- **Artifact Storage** - Build artifacts shared between jobs
- **Turbopack** - Enabled for faster builds
- **CDN Configuration** - Static asset caching via Vercel

## 🔧 Environment Variables

### Required for Production
```bash
NODE_ENV=production
NEXTAUTH_SECRET=your-secret
DATABASE_URL=your-db-url
```

### Optional but Recommended
```bash
GOOGLE_ANALYTICS_ID=GA-tracking-id
LOAN_API_KEY=loan-service-api-key
CREDIT_CHECK_API_KEY=credit-service-api-key
SMTP_HOST=email-service-host
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check ESLint errors in Actions logs
   - Verify TypeScript compilation
   - Ensure all dependencies are installed

2. **Deployment Failures**
   - Verify Vercel secrets are set correctly
   - Check environment variables in Vercel dashboard
   - Ensure build output is valid

3. **Security Scan Failures**
   - Update vulnerable dependencies
   - Check CodeQL alerts in GitHub Security tab

### Debug Commands

```bash
# Local build test
npm run build

# Local lint test
npm run lint

# TypeScript check
npx tsc --noEmit

# Test deployment locally
vercel dev
```

## 📈 Scaling Considerations

- **Database**: Configure connection pooling
- **CDN**: Leverage Vercel's global CDN
- **Monitoring**: Add error tracking (Sentry, etc.)
- **Analytics**: Implement performance monitoring

## 🔄 Rollback Strategy

If issues arise in production:

1. **Quick Rollback**:
   ```bash
   vercel rollback [deployment-url] --token=$VERCEL_TOKEN
   ```

2. **Git Revert**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

3. **Environment Isolation**: Test fixes in staging first

---

For additional support, check the GitHub Actions logs and Vercel deployment logs.