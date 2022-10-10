/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      loader: "akamai",
      path: "/Portfolio",
    },
    files: {
        loader: "akamai",
        path: "/Portfolio",
      },
    basePath: "/Portfolio",
    assetPrefix: "/Portfolio",
  };
  
  module.exports = nextConfig;