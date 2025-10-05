/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
