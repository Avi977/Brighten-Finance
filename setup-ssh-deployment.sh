#!/bin/bash
# 🚀 Hostinger SSH Deployment Setup Script

echo "🔧 Setting up Hostinger SSH Deployment"
echo "======================================"

# Check if SSH key exists
if [ ! -f ~/.ssh/id_rsa ]; then
    echo "📝 No SSH key found. Generating new SSH key pair..."
    read -p "Enter your email: " email
    ssh-keygen -t rsa -b 4096 -C "$email" -f ~/.ssh/id_rsa -N ""
    echo "✅ SSH key generated!"
else
    echo "✅ SSH key already exists."
fi

echo ""
echo "🔑 Your PUBLIC SSH key (add this to Hostinger):"
echo "================================================"
cat ~/.ssh/id_rsa.pub
echo ""

echo "🔒 Your PRIVATE SSH key (add this to GitHub Secrets as HOSTINGER_SSH_PRIVATE_KEY):"
echo "==================================================================================="
echo "⚠️  IMPORTANT: Copy the ENTIRE content below (including BEGIN/END lines)"
echo ""
cat ~/.ssh/id_rsa
echo ""

echo "📋 GitHub Secrets to Add:"
echo "========================="
echo "Go to: GitHub Repository → Settings → Secrets and variables → Actions"
echo ""
echo "Add these 4 secrets:"
echo ""
echo "1. HOSTINGER_SSH_HOST"
echo "   Value: ssh.hostinger.com (or your SSH server)"
echo ""
echo "2. HOSTINGER_SSH_USERNAME"
echo "   Value: your-hostinger-username"
echo ""
echo "3. HOSTINGER_SSH_PRIVATE_KEY"
echo "   Value: [Copy the private key content from above]"
echo ""
echo "4. HOSTINGER_DOMAIN_PATH"
echo "   Value: /home/username/domains/yourdomain.com/public_html"
echo ""

echo "🔧 Hostinger Setup Steps:"
echo "========================="
echo "1. Log into Hostinger hPanel"
echo "2. Go to Advanced → SSH Access"
echo "3. Enable SSH (may require plan upgrade)"
echo "4. Add your public key (shown above)"
echo "5. Test SSH connection:"
echo "   ssh your-username@ssh.hostinger.com"
echo ""

echo "✅ Once setup is complete:"
echo "=========================="
echo "1. Add the GitHub secrets above"
echo "2. Push code to trigger deployment"
echo "3. Check GitHub Actions tab for progress"
echo ""
echo "🚀 Happy deploying!"