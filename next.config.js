/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fastly.picsum.photos'],
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
