/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/happy_vals_day_casey',
  assetPrefix: '/happy_vals_day_casey/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig