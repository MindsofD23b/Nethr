import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    PORT: process.env.PORT || "80",
  },
};

export default nextConfig;
