import type { NextConfig } from "@/node_modules/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shadcnstudio.com'
      }
    ],
  }
};

export default nextConfig;
