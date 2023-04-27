/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  // reactStrictMode: true,
  future: {
    webpack5: true,
  },
  experimental: {
    darkModeVariant: true,
  },
  i18n
}

module.exports = nextConfig
