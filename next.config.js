/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/, // *.svg?url
    });

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
