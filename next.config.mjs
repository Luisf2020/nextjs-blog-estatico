/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || '';

const nextConfig = {
  // exporta el sitio a HTML/CSS/JS estatico (sin servidor Node en produccion)
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
