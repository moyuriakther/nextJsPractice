/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["assets.acme.com", "nextjs.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
