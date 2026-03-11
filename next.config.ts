import type { NextConfig } from "next";

const repo = "global-computers";

const nextConfig: NextConfig = {
  output: "export", // required for GitHub Pages static hosting

  images: {
    unoptimized: true, // GitHub Pages cannot use Next image optimization server
  },

  basePath: `/${repo}`, // repo name
  assetPrefix: `/${repo}/`, // fix CSS/JS loading

  trailingSlash: true, // prevents routing issues in static hosting
};

export default nextConfig;