/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
