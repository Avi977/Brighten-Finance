# Hostinger Deployment Guide

Complete guide for deploying Byton Finance to Hostinger using GitHub Actions.

## 🚀 Overview

This setup automatically deploys your Next.js application to Hostinger whenever you push to the `main` branch using GitHub Actions and FTP deployment.

## 📋 Prerequisites

1. **Hostinger Account** with web hosting plan
2. **GitHub Repository** with your code
3. **FTP Credentials** from Hostinger
4. **Domain** configured in Hostinger

## 🔧 Setup Instructions

### 1. Get Hostinger FTP Credentials

1. Log into your Hostinger control panel
2. Go to **File Manager** or **FTP Accounts**
3. Note down:
   - FTP Server (e.g., `files.000webhost.com` or your domain)
   - Username
   - Password
   - Upload path (usually `/domains/yourdomain.com/public_html/`)

### 2. Configure GitHub Secrets

Add these secrets in your GitHub repository:

**Settings → Secrets and variables → Actions → New repository secret**

```
HOSTINGER_FTP_SERVER=your-ftp-server.com
HOSTINGER_FTP_USERNAME=your-ftp-username
HOSTINGER_FTP_PASSWORD=your-ftp-password
```

### 3. Update Deployment Configuration

Edit `.github/workflows/hostinger-deploy.yml` and update:

```yaml
server-dir: /domains/YOURDOMAIN.com/public_html/
```

Replace `YOURDOMAIN.com` with your actual domain.

### 4. Configure Next.js for Static Export

The `next.config.ts` is already configured for static export. If you need subdirectory deployment:

```typescript
const nextConfig: NextConfig = {
  basePath: '/your-subdirectory',
  assetPrefix: '/your-subdirectory',
  // ... rest of config
}
```

## 🚀 Deployment Process

### Automatic Deployment

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to Hostinger"
   git push origin main
   ```

2. **GitHub Actions will**:
   - Install dependencies
   - Run linting and type checks
   - Build the Next.js application
   - Export static files
   - Upload to Hostinger via FTP

### Manual Deployment

For local testing or manual deployment:

```bash
# Build and export
npm run deploy

# Files will be in the 'out' directory
# Upload 'out' contents to your hosting directory
```

## 📁 File Structure

```
/
├── .github/
│   └── workflows/
│       └── hostinger-deploy.yml    # Hostinger deployment workflow
├── src/                            # Next.js source code
├── public/                         # Static assets
├── out/                           # Generated static files (after build)
├── next.config.ts                 # Next.js config (static export enabled)
├── package.json                   # Scripts updated for export
└── HOSTINGER_DEPLOYMENT.md        # This guide
```

## 🔍 Troubleshooting

### Common Issues

1. **FTP Connection Failed**
   - Verify FTP credentials in GitHub secrets
   - Check if your Hostinger plan supports FTP
   - Try using IP address instead of domain for FTP server

2. **Build Failures**
   ```bash
   # Test build locally
   npm run build
   npm run export
   ```

3. **Images Not Loading**
   - Ensure `images.unoptimized: true` in `next.config.ts`
   - Use relative paths for images
   - Check if images are in `public` directory

4. **API Routes Not Working**
   - Static export doesn't support API routes
   - Move API logic to external services
   - Use serverless functions if needed

5. **Routing Issues**
   - Enable `trailingSlash: true` in config
   - Use `Link` component for navigation
   - Check `.htaccess` rules if needed

### Debug Steps

1. **Check GitHub Actions logs**:
   - Go to Actions tab in GitHub
   - Click on failed workflow
   - Review build and deployment logs

2. **Verify FTP upload**:
   - Check Hostinger file manager
   - Ensure files are in correct directory
   - Verify file permissions

3. **Test locally**:
   ```bash
   # Test static export
   npm run export
   # Serve static files
   npx serve out
   ```

## 🌐 Domain Configuration

### Main Domain

If deploying to main domain (`yourdomain.com`):
- Upload to `/domains/yourdomain.com/public_html/`
- No `basePath` needed in config

### Subdomain

If deploying to subdomain (`app.yourdomain.com`):
- Create subdomain in Hostinger
- Upload to `/domains/yourdomain.com/subdomains/app/public_html/`

### Subdirectory

If deploying to subdirectory (`yourdomain.com/app`):
- Upload to `/domains/yourdomain.com/public_html/app/`
- Set `basePath: '/app'` in config

## ⚡ Performance Optimization

### Static Files

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  // Enable compression
  compress: true,

  // Optimize images
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },

  // Cache headers via .htaccess
  headers: async () => [
    {
      source: '/images/:all*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
}
```

### .htaccess Rules

Create `.htaccess` in your public_html:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static files
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Redirect to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 🔒 Security

### Environment Variables

For static export, sensitive data should be handled carefully:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  env: {
    // Only non-sensitive, public variables
    SITE_URL: process.env.SITE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
}
```

### API Security

Since static export doesn't support API routes:
- Use external APIs with proper authentication
- Implement CORS policies
- Use environment variables for API keys (client-side)

## 📊 Monitoring

### Deployment Status

Monitor deployment status:
- GitHub Actions logs
- Hostinger control panel
- Website accessibility tests

### Performance Monitoring

```javascript
// Add to your app for performance tracking
if (typeof window !== 'undefined') {
  // Track performance metrics
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
  });
}
```

## 🆘 Support

### Hostinger Support
- Live chat available 24/7
- Knowledge base: [hostinger.com/tutorials](https://www.hostinger.com/tutorials)
- Community forum

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Marketplace Actions](https://github.com/marketplace)

---

**🎉 Your site will be live at `https://yourdomain.com` after successful deployment!**