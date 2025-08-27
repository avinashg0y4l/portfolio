/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // for static export

  images: {
    unoptimized: true,
  },

  // Only set basePath & assetPrefix in production (GitHub Pages)
  ...(isProd
    ? {
        basePath: "/portfolio",
        assetPrefix: "/portfolio/",
      }
    : {}),
};

export default nextConfig;
