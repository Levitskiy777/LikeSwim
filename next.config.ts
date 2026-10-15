import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/ru/blog", permanent: true },
      { source: "/blog/:slug", destination: "/ru/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
