import type { NextConfig } from 'next';
import * as path from 'node:path';
import { withExpo } from "@expo/next-adapter";

console.log('STRAT!!!')

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: [
        'react-native',
        'react-native-web',
        'expo',
        // Add more React Native/Expo packages here as needed
    ],
    experimental: {
        turbo: {
            resolveExtensions: ['.web.tsx', '.web.ts', '.js', '.jsx', '.ts', '.tsx'], // Add your custom extensions here
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'], // Example loader configuration for SVGs
                    as: '*.js',
                },
            },
        },
    },
};

export default withExpo(nextConfig);
