import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ften894tg4.ufs.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "escaleit.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "medium.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
