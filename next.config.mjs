/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // if you're having image optimization issues
  },
};

module.exports = nextConfig;
