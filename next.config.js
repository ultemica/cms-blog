/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    remotePatterns: [new URL('https://cdn.bsky.app/**')]
  }
}

module.exports = nextConfig
