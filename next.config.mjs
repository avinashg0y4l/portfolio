const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // ✅ for GitHub Pages

  images: {
    unoptimized: true, // ✅ needed for gifs/pngs
  },

  ...(isProd
    ? {
        basePath: "/portfolio",   // ✅ matches your repo name
        assetPrefix: "/portfolio/",
      }
    : {}),
};

export default nextConfig;
