#!/bin/bash
# Hostinger deployment script

echo "🚀 Building Byton Finance..."

# Install dependencies
npm ci --only=production

# Build the application
npm run build

echo "✅ Build completed!"
echo "📁 Built files are in the 'out' directory"

# List built files for verification
echo "📋 Built files:"
ls -la out/