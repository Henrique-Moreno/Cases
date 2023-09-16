/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/faq',
        permanent: true,
      },
    ]
  },
}
