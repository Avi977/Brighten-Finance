# 🚀 Hostinger Git Deployment Setup Guide

## Overview
This guide shows you how to deploy your Byton Finance app to Hostinger using Git instead of FTP for more reliable deployments.

## 🎯 Hostinger Git Deployment Options

### Option 1: SSH + Git Clone (Recommended)
- Works on most Hostinger plans
- Direct deployment via SSH
- Best for automatic deployments

### Option 2: GitHub Integration (Premium Plans)
- Available on Business/Premium plans
- Built-in GitHub integration in hPanel
- Automatic deployments on push

### Option 3: File Manager Upload (Fallback)
- Manual upload of built files
- Works on all plans
- Less automated but reliable

## 🔧 Option 1: SSH + Git Deployment (Recommended)

### Step 1: Enable SSH Access
1. **Log into Hostinger hPanel**
2. **Go to Advanced → SSH Access**
3. **Enable SSH** (may require plan upgrade)
4. **Note your SSH details**:
   - Host: `ssh.hostinger.com` (or similar)
   - Port: Usually `22`
   - Username: Your hosting username

### Step 2: Set up SSH Key Authentication
1. **Generate SSH key pair** (if you don't have one):
   ```bash
   ssh-keygen -t rsa -b 4096 -c "your-email@example.com"
   ```

2. **Add public key to Hostinger**:
   - Copy your public key (`~/.ssh/id_rsa.pub`)
   - Add it in hPanel → SSH Access → Manage SSH Keys

3. **Test SSH connection**:
   ```bash
   ssh your-username@ssh.hostinger.com
   ```

### Step 3: Set up Git Repository on Server
SSH into your Hostinger server and run:
```bash
# Navigate to your domain directory
cd /home/username/domains/yourdomain.com/public_html

# Initialize git repository
git init

# Add GitHub as remote
git remote add origin https://github.com/yourusername/Byton-Finance.git

# Set up deployment branch
git branch deploy
git checkout deploy
```

## 🔧 Option 2: GitHub Integration (Premium Plans)

### Available on Business/Premium Plans
1. **Go to hPanel → Git**
2. **Connect GitHub account**
3. **Select repository**: `Byton-Finance`
4. **Set deployment branch**: `main`
5. **Set build commands**:
   ```bash
   npm install
   npm run build
   ```
6. **Set deploy path**: `/public_html`

## 🎯 GitHub Actions Workflow for Git Deployment

Let me create a new workflow that uses SSH deployment:

### Required GitHub Secrets:
```
HOSTINGER_SSH_HOST=ssh.hostinger.com
HOSTINGER_SSH_USERNAME=your-ssh-username
HOSTINGER_SSH_PRIVATE_KEY=your-private-key-content
HOSTINGER_DOMAIN_PATH=/home/username/domains/yourdomain.com/public_html
```

## 🚀 Deployment Methods

### Method A: Direct SSH Deployment
- SSH into server
- Pull latest code
- Build and deploy

### Method B: Build Locally, Upload via SSH
- Build locally in GitHub Actions
- Upload built files via SSH/SCP

### Method C: rsync Deployment
- Use rsync to sync files
- More efficient for large deployments

## 🔄 Automatic Deployment Process

1. **Push to GitHub** → Triggers workflow
2. **GitHub Actions** → Builds the app
3. **SSH Deploy** → Copies files to Hostinger
4. **Server Setup** → Configures web server
5. **Live Site** → Your app is deployed!

## 📋 Deployment Commands

### Option A: Git Pull Method
```bash
# On Hostinger server
cd /home/username/domains/yourdomain.com/public_html
git pull origin main
npm install
npm run build
cp -r out/* ./
```

### Option B: SCP Upload Method
```bash
# From GitHub Actions
scp -r ./out/* username@ssh.hostinger.com:/path/to/public_html/
```

### Option C: rsync Method
```bash
# From GitHub Actions
rsync -avz --delete ./out/ username@ssh.hostinger.com:/path/to/public_html/
```

## 🛠️ Server Configuration

### .htaccess for Next.js Static Export
Make sure your server has proper .htaccess rules for Next.js:
```apache
# Already included in your project
# See public/.htaccess
```

### Node.js Setup (if available)
Some Hostinger plans support Node.js:
1. **Enable Node.js** in hPanel
2. **Set Node.js version** (16+ recommended)
3. **Install dependencies**: `npm install`
4. **Build project**: `npm run build`

## 🔍 Troubleshooting

### SSH Connection Issues
```bash
# Test SSH connection
ssh -v your-username@ssh.hostinger.com

# Check SSH key
ssh-add -l

# Test with password (if keys fail)
ssh your-username@ssh.hostinger.com
```

### Permission Issues
```bash
# Fix file permissions
chmod 755 /home/username/domains/yourdomain.com/public_html
chmod 644 /home/username/domains/yourdomain.com/public_html/*
```

### Build Issues
```bash
# Check Node.js version
node --version

# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🎯 Next Steps

1. **Choose your preferred method**
2. **Set up SSH access** (for Options A & B)
3. **Configure GitHub secrets**
4. **Test deployment manually** first
5. **Set up automated workflow**

Let me know which option you'd like to use, and I'll help you set it up! 🚀