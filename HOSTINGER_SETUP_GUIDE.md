# 🚀 Hostinger Deployment Setup - Your Specific Configuration

## 🔑 **GitHub Secrets to Add**

Go to: `https://github.com/Avi977/Byton-Finance/settings/secrets/actions`

### Required Secrets:

#### **HOSTINGER_HOST**
```
ftp.darkgrey-dunlin-762929.hostingersite.com
```

#### **HOSTINGER_USERNAME**
```
u574235449
```

#### **HOSTINGER_PORT**
```
22
```

#### **HOSTINGER_SSH_PRIVATE_KEY** (Generate This)
Run on your computer:
```bash
# Windows (Command Prompt or PowerShell)
ssh-keygen -t rsa -b 4096 -C "byton-finance-deploy"

# When prompted:
# Enter file: C:\Users\mahar\.ssh\hostinger_deploy
# Passphrase: (leave empty, press Enter twice)
```

Get your private key:
```bash
# Windows
type C:\Users\mahar\.ssh\hostinger_deploy
```

Copy the ENTIRE output (including `-----BEGIN` and `-----END` lines) into the GitHub secret.

#### **HOSTINGER_FTP_PASSWORD** (Fallback - Optional)
```
Your Hostinger account password (for FTP fallback if SSH fails)
```

## 🔐 **SSH Key Setup**

### Step 1: Add Public Key to Hostinger

Get your public key:
```bash
# Windows
type C:\Users\mahar\.ssh\hostinger_deploy.pub
```

### Step 2: Add to Hostinger via File Manager
1. Login to **Hostinger hPanel**
2. Go to **File Manager**
3. Navigate to `/home/u574235449/` (your home directory)
4. Create folder `.ssh` (if doesn't exist)
5. Create/edit file `.ssh/authorized_keys`
6. Paste your public key on a new line
7. Set permissions: `.ssh` folder = 700, `authorized_keys` file = 600

## 🎯 **Hybrid Deployment Features**

### Primary: SSH Deployment (Fast & Reliable)
- ✅ Direct file upload via SCP
- ✅ Automatic permission setting
- ✅ Faster deployment
- ✅ Better error handling

### Fallback: FTP Deployment (If SSH Unavailable)
- ✅ Works on all Hostinger plans
- ✅ Automatic fallback if SSH fails
- ✅ Clean slate deployment
- ✅ Still fully automated

## 🌐 **Your Site URLs**

- **Current Site**: https://darkgrey-dunlin-762929.hostingersite.com
- **Custom Domain**: https://bytonfinance.com (when DNS is configured)

## 🧪 **Testing Your Setup**

### 1. Test SSH Connection (Optional)
```bash
ssh u574235449@ftp.darkgrey-dunlin-762929.hostingersite.com
```

### 2. Deploy Test
1. Add all GitHub secrets
2. Push any change to main branch
3. Check **Actions** tab in GitHub
4. Visit your site after deployment

## 📁 **File Structure**
Your files will be deployed to:
```
/home/u574235449/domains/darkgrey-dunlin-762929.hostingersite.com/public_html/
├── index.html (main page)
├── index.php (PHP fallback)
├── _next/ (Next.js assets)
├── about/
├── apply/
├── business-loans/
├── car-loans/
├── contact/
├── faqs/
├── legal/
├── .htaccess (URL routing)
├── robots.txt (SEO)
├── sitemap.xml (SEO)
└── deploy-info.txt (deployment details)
```

## 🔧 **Troubleshooting**

### SSH Issues
- **"Permission denied"**: Check SSH key setup in Hostinger
- **"Connection refused"**: SSH might not be enabled (FTP fallback will work)

### FTP Fallback Triggers When:
- SSH keys not configured properly
- SSH not enabled on your hosting plan
- SSH connection times out

### Manual Check
Visit: https://darkgrey-dunlin-762929.hostingersite.com after deployment

## ⚡ **Quick Start**

1. **Add GitHub secrets** (4 required values above)
2. **Generate SSH keys** (optional - FTP works without)
3. **Push code** → Automatic deployment!
4. **Check your site** → Live in ~2 minutes

---

**Ready to deploy!** 🎉 The workflow tries SSH first, falls back to FTP if needed. You'll have automated deployment either way!