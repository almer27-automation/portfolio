/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  output: 'export',
  basePath: '/portfolio', // Replace with your repository name if deploying to a subpath
  assetPrefix: '/portfolio/', // Ensure assets are loaded correctly
  
}

export default nextConfig
