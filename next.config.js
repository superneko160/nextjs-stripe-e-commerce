/** @type {import('next').NextConfig} */
const nextConfig = {
  // 外部URLの画像を利用する際の設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
