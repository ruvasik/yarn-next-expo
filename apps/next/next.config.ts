import * as path from 'node:path';

const { withTamagui } = require('@tamagui/next-plugin');

module.exports = function (name, { defaultConfig }) {
  let config = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
      turbo: true,
    },
    compiler: {
      styledComponents: true,
    },
    webpack(config) {
      config.resolve.alias['@tamagui/config'] = path.join(
        __dirname,
        '../../packages/ui/src/tamagui.config.ts'
      );
      config.resolve.modules.push(path.resolve(__dirname, '../../packages'));
      return config;
    },
  };

  const tamaguiPlugin = withTamagui({
    appDir: true,
    config: './tamagui.config.ts',
    components: ['tamagui'],
    // outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    // disableExtraction: process.env.NODE_ENV === 'development"
  });
  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};
