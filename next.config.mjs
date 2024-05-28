/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
      if (dev) {
        config.devtool = 'cheap-module-source-map';
      }
      return config;
    },
    reactStrictMode: true,
  };
  
  export default nextConfig;