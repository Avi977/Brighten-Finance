# Hostinger SSH Deployment Setup Guide

## 🔑 Required GitHub Secrets

You need to add these secrets to your GitHub repository:

### 1. Go to GitHub Repository Settings
- Go to your repository: `https://github.com/Avi977/Byton-Finance`
- Click **Settings** tab
- Click **Secrets and variables** → **Actions**
- Click **New repository secret**

### 2. Add These Secrets

#### `HOSTINGER_HOST`
- **Value**: Your domain name or Hostinger server IP
- **Example**: `bytonfinance.com` or `185.xxx.xxx.xxx`

#### `HOSTINGER_USERNAME`
- **Value**: Your Hostinger cPanel username
- **Example**: `u123456789` or your custom username

#### `HOSTINGER_SSH_PRIVATE_KEY`
- **Value**: Your private SSH key (see below for generation)
- **Format**: Complete private key including headers

#### `HOSTINGER_PORT` (Optional)
- **Value**: `22` (default SSH port)
- **Note**: Only add if Hostinger uses a different port

## 🔐 SSH Key Generation

### Step 1: Generate SSH Key Pair
```bash
# On your local machine
ssh-keygen -t rsa -b 4096 -C "byton-finance-deploy"

# When prompted:
# - File: /home/username/.ssh/hostinger_deploy
# - Passphrase: Leave empty (press Enter twice)
```

### Step 2: Get Your Keys
```bash
# Private key (for GitHub secret)
cat ~/.ssh/hostinger_deploy

# Public key (for Hostinger)
cat ~/.ssh/hostinger_deploy.pub
```

### Step 3: Add Public Key to Hostinger

#### Option A: Via Hostinger cPanel
1. Login to Hostinger cPanel
2. Go to **Files** → **File Manager**
3. Navigate to home directory
4. Create `.ssh` folder if it doesn't exist
5. Create/edit `.ssh/authorized_keys` file
6. Add your public key on a new line

#### Option B: Via Terminal (if SSH access is enabled)
```bash
# Connect to your Hostinger server
ssh your-username@your-domain.com

# Add your public key
mkdir -p ~/.ssh
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

## 🚀 Workflow Features

- **✅ Automatic Build**: Builds Next.js static site
- **✅ Smart Backup**: Creates dated backups (keeps last 3)
- **✅ Clean Deployment**: Replaces old files with new ones
- **✅ Proper Permissions**: Sets correct file permissions
- **✅ Verification**: Checks deployment success
- **✅ PHP Compatibility**: Includes index.php fallback

## 🔧 Troubleshooting

### SSH Connection Issues
```bash
# Test SSH connection locally
ssh -T your-username@your-domain.com

# If connection fails, check:
# 1. SSH key is in ~/.ssh/authorized_keys on server
# 2. Correct username and host in secrets
# 3. SSH is enabled in Hostinger (some shared plans disable it)
```

### Deployment Path Issues
- Default path: `/home/username/public_html`
- If different, update the workflow target path
- Check your Hostinger file structure

### Permission Issues
- Workflow sets 644 for files, 755 for directories
- If issues persist, contact Hostinger support

## 🎯 Testing Your Setup

1. **Add all secrets** to GitHub repository
2. **Push any change** to main branch
3. **Check Actions tab** in GitHub for workflow progress
4. **Visit your website** to confirm deployment

## 📞 Support

- **Hostinger SSH Help**: Check if SSH is enabled on your plan
- **GitHub Actions Logs**: Check workflow logs for specific errors
- **File Permissions**: Contact Hostinger if permission issues persist

---

**Ready to deploy!** 🚀 Once secrets are configured, every push to main will automatically deploy your site via SSH!