/** @type {import('next').NextConfig} */
const nextConfig = {
  // There is an unrelated package-lock.json in the parent directory; without this
  // Turbopack walks up and picks the wrong project root.
  turbopack: { root: import.meta.dirname },

  // GitHub Pages serves plain files — no Next server, so everything is
  // pre-rendered to ./out at build time.
  output: 'export',

  // Image optimisation needs a server. Without this the build fails.
  images: { unoptimized: true },

  // Emit /resume/index.html rather than /resume.html. Predictable on static hosts.
  trailingSlash: true,
};

export default nextConfig;
