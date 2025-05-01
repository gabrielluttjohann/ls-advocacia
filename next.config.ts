import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    disableStaticImages: false,
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
};

export default nextConfig;
