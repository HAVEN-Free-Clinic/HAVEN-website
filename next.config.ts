import type { NextConfig } from 'next'

// When COMING_SOON=true, only *.soon.tsx route files exist in the build:
// the entire real site (pages, layouts, flight data, chunks) is excluded
// from the export. Toggle via the COMING_SOON repo variable in GitHub
// Settings -> Secrets and variables -> Actions -> Variables, then re-run deploy.
const comingSoon = process.env.COMING_SOON === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: comingSoon ? ['soon.tsx'] : ['tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'nursing.yale.edu',
      },
    ],
  },
}

export default nextConfig
