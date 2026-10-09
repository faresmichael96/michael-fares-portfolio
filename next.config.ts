import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.223"], // NOTE: This needs to be removed when we release to production
};

export default nextConfig;
