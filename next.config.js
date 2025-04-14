import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: 'build',
  // output: 'export',
  images: {
    remotePatterns: [new URL('https://cdn.bsky.app/**')]
  }
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

module.exports = nextConfig
