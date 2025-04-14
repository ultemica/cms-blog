/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  // output: 'export',
  images: {
    remotePatterns: [new URL('https://cdn.bsky.app/**')]
  }
}

module.exports = nextConfig
