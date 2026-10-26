import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Music-academy",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;