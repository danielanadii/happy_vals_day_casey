import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/happy_vals_day_casey',
  assetPrefix: '/happy_vals_day_casey/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
