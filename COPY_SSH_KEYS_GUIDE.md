# 🔑 SSH Keys Copy Guide

## Step 1: Find Your SSH Directory

**Windows Command Prompt:**
```cmd
cd %USERPROFILE%\.ssh
dir
```

**Git Bash (recommended):**
```bash
cd ~/.ssh
ls -la
```

You should see files like:
- `id_rsa` (private key)
- `id_rsa.pub` (public key)

## Step 2: Copy Private Key for GitHub

**Copy the ENTIRE private key content:**

```bash
# View private key
cat ~/.ssh/id_rsa

# Or copy to clipboard (Windows)
clip < ~/.ssh/id_rsa
```

**Important:** Copy EVERYTHING including:
- `-----BEGIN OPENSSH PRIVATE KEY-----`
- All the encoded lines in between
- `-----END OPENSSH PRIVATE KEY-----`

## Step 3: Copy Public Key for Hostinger

**Copy the public key content:**

```bash
# View public key
cat ~/.ssh/id_rsa.pub

# Or copy to clipboard (Windows)
clip < ~/.ssh/id_rsa.pub
```

## Step 4: Add to GitHub Secrets

Go to: **GitHub Repository → Settings → Secrets and variables → Actions → New repository secret**

**Add these 4 secrets:**

### 1. HOSTINGER_SSH_HOST
```
ssh.hostinger.com
```
*Or whatever SSH host Hostinger provides*

### 2. HOSTINGER_SSH_USERNAME
```
your-hostinger-username
```
*Your Hostinger hosting username*

### 3. HOSTINGER_SSH_PRIVATE_KEY
```
-----BEGIN OPENSSH PRIVATE KEY-----
[Paste your ENTIRE private key content here]
-----END OPENSSH PRIVATE KEY-----
```

### 4. HOSTINGER_DOMAIN_PATH
```
/home/username/domains/yourdomain.com/public_html
```
*Replace with your actual domain path*

## Step 5: Add Public Key to Hostinger

1. **Log into Hostinger hPanel**
2. **Go to Advanced → SSH Access**
3. **Click "Manage SSH Keys"**
4. **Add New SSH Key**
5. **Paste your public key content** (from `id_rsa.pub`)
6. **Save**

## Step 6: Test SSH Connection

```bash
ssh your-username@ssh.hostinger.com
```

If successful, you should see your server prompt!

## 🐛 Troubleshooting

### "Permission denied (publickey)"
- Make sure you added the PUBLIC key to Hostinger
- Make sure you added the PRIVATE key to GitHub secrets
- Check that the keys match (same pair)

### "Host key verification failed"
- Accept the host key when prompted
- Or add `-o StrictHostKeyChecking=no` to ssh command

### "No such file or directory"
- Your SSH keys might be in a different location
- Try: `find ~ -name "id_rsa" -type f 2>/dev/null`

## ✅ Once Setup:

Push any change to trigger the deployment:
```bash
git commit -am "Test SSH deployment"
git push origin main
```

Check **GitHub Actions** tab for deployment progress! 🚀