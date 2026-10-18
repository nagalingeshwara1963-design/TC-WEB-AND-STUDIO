/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages on the custom domain tcwebandstudio.in (served from the root)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    // Empty now that the site is served from the domain root
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
