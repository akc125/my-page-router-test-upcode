import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"], // Add your image host domains here
  },
};

export default nextConfig;
