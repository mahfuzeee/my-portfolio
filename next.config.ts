import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-cdn-media.chatglm.cn",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
