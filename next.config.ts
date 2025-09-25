import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Hostinger deployment
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    qualities: [25, 50, 75, 100],
  },

  // Base path for deployment (update if deploying to subdirectory)
  // basePath: '/your-subdirectory',

  // Asset prefix for CDN (optional)
  // assetPrefix: 'https://your-cdn-domain.com',

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
