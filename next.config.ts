import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    ppr: "incremental", // Enables Partial Prerendering
  },
};

export default nextConfig;