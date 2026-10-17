/** @type {import('next').NextConfig} */
const basePath = "/TC-WEB-AND-STUDIO";

const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (served from /TC-WEB-AND-STUDIO)
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
