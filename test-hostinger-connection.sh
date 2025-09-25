#!/bin/bash
# 🧪 Test Hostinger SSH Connection

echo "🔍 Testing Hostinger SSH Connection"
echo "==================================="

# Get connection details
read -p "SSH Host (e.g., ssh.hostinger.com): " ssh_host
read -p "SSH Username: " ssh_user
read -p "Domain path (e.g., /home/user/domains/site.com/public_html): " domain_path

echo ""
echo "🔌 Testing connection..."

# Test SSH connection
if ssh -o ConnectTimeout=10 -o BatchMode=yes "$ssh_user@$ssh_host" "echo 'Connection successful!'" 2>/dev/null; then
    echo "✅ SSH connection successful!"

    echo ""
    echo "🏠 Testing domain path..."

    # Test domain path
    if ssh "$ssh_user@$ssh_host" "ls -la $domain_path" 2>/dev/null; then
        echo "✅ Domain path accessible!"

        echo ""
        echo "📝 Creating test file..."

        # Create test file
        ssh "$ssh_user@$ssh_host" "echo 'Deployment test - $(date)' > $domain_path/deployment-test.txt"

        if ssh "$ssh_user@$ssh_host" "ls $domain_path/deployment-test.txt" 2>/dev/null; then
            echo "✅ File creation successful!"
            echo "🌐 Check your website for: deployment-test.txt"

            # Cleanup
            ssh "$ssh_user@$ssh_host" "rm $domain_path/deployment-test.txt"
            echo "🧹 Test file cleaned up"
        else
            echo "❌ File creation failed - check permissions"
        fi
    else
        echo "❌ Domain path not accessible: $domain_path"
        echo "💡 Try these common paths:"
        echo "   /home/$ssh_user/domains/yourdomain.com/public_html"
        echo "   /home/$ssh_user/public_html"
        echo "   /public_html"
    fi
else
    echo "❌ SSH connection failed!"
    echo ""
    echo "💡 Troubleshooting tips:"
    echo "1. Check if SSH is enabled in Hostinger hPanel"
    echo "2. Verify SSH host and username"
    echo "3. Make sure your SSH key is added to Hostinger"
    echo "4. Try connecting manually: ssh $ssh_user@$ssh_host"
fi

echo ""
echo "📋 If connection works, use these GitHub Secrets:"
echo "================================================"
echo "HOSTINGER_SSH_HOST=$ssh_host"
echo "HOSTINGER_SSH_USERNAME=$ssh_user"
echo "HOSTINGER_DOMAIN_PATH=$domain_path"
echo "HOSTINGER_SSH_PRIVATE_KEY=[Your private key content]"