import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_ID: "Ov23liBwK50TNvNFeFbV",
    GITHUB_SECRET: "96e1ad4e8c28f2f1a4989b4b9d84c79188519473",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
    unoptimized: false, // Ensure Next.js still optimizes images
  },
};

export default nextConfig;
