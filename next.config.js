// import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: 'build',
  // output: process.env.NEXT_OUTPUT || 'standalone',
  images: {
    remotePatterns: [new URL('https://cdn.bsky.app/**')]
  }
}

// if (process.env.NODE_ENV === 'development') {
//   await setupDevPlatform()
// }

module.exports = nextConfig
