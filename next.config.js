/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ruby-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ruby-portfolio/' : '',
}

module.exports = nextConfig
