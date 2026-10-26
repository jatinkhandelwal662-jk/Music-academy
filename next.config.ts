import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages static export
  images: {
    unoptimized: true, // Required for static exports
  },
  reactCompiler: true,
  cacheComponents: true, // Replaces experimental.ppr
};

export default nextConfig;