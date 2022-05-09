module.exports = {
  reactStrictMode: true,
  env: {
    APP_URL: 'http://localhost:3000'
  },
  rewrites: () => [],
}

const STUDIO_REWRITE = {
  source: '/booking/:path*',
  destination:
    process.env.NODE_ENV = 'development'
    ? 'http://localhost:3333/studio/:path*'
    : '/booking/index.html'
}