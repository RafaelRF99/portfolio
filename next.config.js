/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    formats: ['image/jpeg', 'image/png', 'image/webp'],
  },
}

module.exports = nextConfig
