import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Vercel handles optimisation; keeping this off avoids the image
    // optimisation quota and lets the CDN serve the source files directly.
    unoptimized: true,
  },
};

export default nextConfig;
