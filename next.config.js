/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for GitHub Pages, which serves files only.
  // `npm run build` will now emit a fully static site to ./out/.
  output: "export",
  // Use directory-style URLs (/about/ -> /about/index.html) so deep links
  // resolve correctly on a static host like GitHub Pages.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
