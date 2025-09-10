/* @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // for static export

  images: {
    unoptimized: true, // allows serving images without optimization
  },

  // Only set basePath & assetPrefix in production
  ...(isProd
    ? {
        basePath: "/portfolio",
        assetPrefix: "/portfolio/",
      }
    : {}),
};

export default nextConfig;
