/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fastly.picsum.photos', 'images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    // Configuración del loader para archivos de audio
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/',
          outputPath: `${isServer ? '../' : ''}static/`,
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;