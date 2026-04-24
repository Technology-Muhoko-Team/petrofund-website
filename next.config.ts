/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "innovation.muhoko.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "petrofund.org",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
