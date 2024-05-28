import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        './lib/runExperiments': 'commonjs ./lib/runExperiments',
        './lib/runExperimentsHandler': 'commonjs ./lib/runExperimentsHandler',
        './lib/js/testDynamicStructureChange': 'commonjs ./lib/js/testDynamicStructureChange',
        './lib/ts/testDynamicStructureChange': 'commonjs ./lib/ts/testDynamicStructureChange'
      });
    }
    return config;
  }
};

export default nextConfig;