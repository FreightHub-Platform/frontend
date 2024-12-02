/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Allow images from Cloudinary
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8081/api/:path*",
        // destination: "https://auth.freighthub.danujaya.live/api/:path*",
      },
    ];
  },
};

export default nextConfig;
