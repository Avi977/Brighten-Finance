# 🚨 Fixing 403 Error on Hostinger Git Deployment

## The Issue
Hostinger's Git integration deployed your source code instead of the built static files. You need the contents of the `out/` directory, not the root directory.

## 🔧 Quick Fixes

### Option 1: Update Hostinger Git Configuration

1. **Log into Hostinger hPanel**
2. **Go to Git section**
3. **Edit your repository settings**
4. **Update Build Command**:
   ```bash
   npm install && npm run build
   ```
5. **Update Deploy Path**:
   ```
   /public_html/
   ```
6. **Set Source Directory**:
   ```
   out/
   ```

### Option 2: Add Build Script to Your Repository

Create a build script that Hostinger can use:

**File: `hostinger-build.sh`**
```bash
#!/bin/bash
# Hostinger build script
echo "🔧 Building Byton Finance for Hostinger..."

# Install dependencies
npm ci --production

# Build the application
npm run build

# Copy built files to public_html
echo "📁 Copying files to public_html..."
cp -r out/* /home/$(whoami)/domains/$(hostname)/public_html/

# Set proper permissions
find /home/$(whoami)/domains/$(hostname)/public_html -type d -exec chmod 755 {} \;
find /home/$(whoami)/domains/$(hostname)/public_html -type f -exec chmod 644 {} \;

echo "✅ Deployment complete!"
```

### Option 3: Manual File Manager Fix (Quick Solution)

1. **Go to Hostinger File Manager**
2. **Navigate to your domain's public_html**
3. **Delete everything in public_html**
4. **Look for an `out/` folder** (created by Git build)
5. **Copy EVERYTHING from `out/` to `public_html/`**
6. **Make sure `index.html` is in the root of public_html**

## 🎯 What Should Be in public_html

Your `public_html` directory should contain:
```
public_html/
├── index.html          # Main homepage
├── _next/             # Next.js assets
├── about/
│   └── index.html
├── apply/
│   └── index.html
├── business-loans/
│   └── index.html
├── car-loans/
│   └── index.html
├── contact/
│   └── index.html
├── faqs/
│   └── index.html
├── legal/
│   └── index.html
├── .htaccess          # Server configuration
└── [other static files]
```

## 🔧 Check Current Structure

**In Hostinger File Manager, check if you have:**
- ❌ `src/`, `package.json`, `node_modules/` → Wrong (source files)
- ✅ `index.html`, `_next/`, folders with `index.html` → Correct (built files)

## 🚀 Correct Hostinger Git Settings

**Repository Settings:**
- **Repository**: `https://github.com/yourusername/Byton-Finance.git`
- **Branch**: `main`
- **Build Command**:
  ```bash
  npm install && npm run build
  ```
- **Publish Directory**: `out`
- **Deploy Branch**: `main`

## 🔍 Debug Steps

### 1. Check What Files Are Actually Deployed
**File Manager → public_html → Check contents**

### 2. Look for Build Output
**Check if `out/` directory exists somewhere**

### 3. Check Build Logs
**Hostinger Git → View build logs for errors**

### 4. Test Static Files
**Try accessing: `yourdomain.com/index.html`**

## ⚡ Quick Manual Fix

**If you need it working RIGHT NOW:**

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload `out/` contents:**
   - Zip the contents of your local `out/` folder
   - Upload to Hostinger File Manager
   - Extract to `public_html/`

3. **Set permissions via File Manager:**
   - Select all files → Right-click → Permissions → 644
   - Select all folders → Right-click → Permissions → 755

## 🎯 Expected Result

After fixing, your site should load properly at your domain without 403 errors.

**Test these URLs:**
- `yourdomain.com` → Should show homepage
- `yourdomain.com/about` → Should show about page
- `yourdomain.com/apply` → Should show loan application

---

Which option would you like to try first? The manual File Manager fix is fastest for immediate results!