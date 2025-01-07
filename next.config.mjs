/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...config.externals,
        {
          'zlib-sync': 'commonjs zlib-sync',
        },
      ];
    }
    return config;
  },
};

export default nextConfig;
