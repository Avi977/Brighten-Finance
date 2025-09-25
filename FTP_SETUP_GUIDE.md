# 🔧 Hostinger FTP Setup Guide

## The FTP connection failed because the server hostname couldn't be found. Here's how to get the correct FTP settings:

## 📋 Step 1: Get Your FTP Credentials from Hostinger

1. **Log into your Hostinger control panel (hPanel)**
2. **Go to "File Manager" or "FTP Accounts"**
3. **Look for FTP connection details**

## 🏷️ Common Hostinger FTP Server Formats:

Your FTP server should be one of these formats:

### Option 1: Domain-based
```
ftp.yourdomain.com
```

### Option 2: Server-based
```
srv123.hostinger.com
```

### Option 3: IP Address
```
123.456.789.012
```

## ⚙️ Current GitHub Secrets to Update

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Update these secrets with the **correct values from Hostinger**:

```
HOSTINGER_FTP_SERVER=ftp.yourdomain.com (or srv123.hostinger.com)
HOSTINGER_FTP_USERNAME=your-ftp-username
HOSTINGER_FTP_PASSWORD=your-ftp-password
```

## 🔍 How to Find Your FTP Server

1. **In Hostinger hPanel:**
   - Go to **File Manager**
   - Look for **FTP Access** or **FTP Details**
   - Copy the **Hostname** or **Server** field

2. **Or check your hosting email:**
   - Look for the welcome email from Hostinger
   - FTP details are usually included

## 🧪 Test Your FTP Settings Locally

Before updating GitHub secrets, test them locally:

```bash
# Test FTP connection (replace with your actual details)
ftp ftp.yourdomain.com

# Or use an FTP client like FileZilla:
# Host: ftp.yourdomain.com
# Username: your-username
# Password: your-password
# Port: 21
```

## 🚀 After Updating Secrets

1. **Update the GitHub secrets** with correct values
2. **Push any small change** to trigger the workflow
3. **Check the Actions tab** for deployment progress

## ❌ Common Issues & Solutions

### Issue: "Server doesn't exist"
**Solution**: Double-check the FTP server hostname from Hostinger

### Issue: "Authentication failed"
**Solution**: Verify username and password are correct

### Issue: "Connection timeout"
**Solution**: Check if your Hostinger plan supports FTP (some basic plans don't)

### Issue: "Directory not found"
**Solution**: The server directory might be different:
- Try `/public_html/`
- Try `/domains/yourdomain.com/public_html/`
- Try just `/`

## 📞 Need Help?

1. **Check Hostinger documentation**
2. **Contact Hostinger support** for FTP details
3. **Use Hostinger's File Manager** as an alternative to FTP

---

Once you have the correct FTP server hostname, update your GitHub secrets and the deployment will work! 🎉