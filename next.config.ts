import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '/happy_vals_day_casey/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
