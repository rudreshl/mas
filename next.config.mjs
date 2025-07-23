/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/demo/image/upload/**')],
  },
};

export default nextConfig;
