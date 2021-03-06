module.exports = {
  reactStrictMode: true,
  env: {
    APP_URL: 'http://localhost:3000',
    SANITY_API_TOKEN: '',
  },
  rewrites: () => [],
}

const STUDIO_REWRITE = {
  source: '/booking/:path*',
  destination:
    process.env.NODE_ENV = 'development'
    ? 'http://localhost:3333/booking/:path*'
    : '/booking/index.html'
}