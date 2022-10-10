/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      loader: "akamai",
      path: "",
    },
    basePath: "/Portfolio",
    images: "/Portfolio",
    assetPrefix: "/Portfolio",
  };
  
  module.exports = nextConfig;