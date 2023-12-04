/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
    legacyBrowsers: false,
  },
  async rewrites() {
    return [
      {
        source: '/js/telegram-web-app.js',
        destination: 'https://telegram.org/js/telegram-web-app.js',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/js/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
