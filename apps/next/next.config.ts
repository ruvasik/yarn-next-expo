import type { NextConfig } from 'next';
import * as path from 'node:path';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    config.resolve.modules.push(path.resolve(__dirname, '../packages'));
    return config;
  },
};

export default nextConfig;
