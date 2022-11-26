/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://iccokennels.netlify.app/"],
  },
};

module.exports = nextConfig;
