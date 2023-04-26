/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  experimental: {
    darkModeVariant: true,
  },
}

module.exports = nextConfig
