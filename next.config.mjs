// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Keep this for static site generation

    // Add this to disable image optimization for static export
    images: {
        unoptimized: true,
    },

    // Add these lines if deploying to github.com/avinashg0y4l/portfolio
    // If your site is live at avinashg0y4l.github.io/portfolio, you need these:
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',

};

export default nextConfig;