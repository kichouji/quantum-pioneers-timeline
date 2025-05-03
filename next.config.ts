import type { NextConfig } from "next";

const repo = 'quantum-pioneers-timeline';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
