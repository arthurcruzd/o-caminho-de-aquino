import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/o-caminho-de-aquino",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
