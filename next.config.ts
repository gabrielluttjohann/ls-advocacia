import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  images: {
    disableStaticImages: false,
    dangerouslyAllowSVG: true,
    unoptimized: true,

  },

};

export default nextConfig;
