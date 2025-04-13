/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.bsky.app/img/avatar/plain/did:plc:3hpgxglzqzzfviegqamesrfd/**')]
  }
}

module.exports = nextConfig
