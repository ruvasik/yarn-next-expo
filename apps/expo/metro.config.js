const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    // Добавляем поддержку суффиксов для платформ
    sourceExts: [...defaultConfig.resolver.sourceExts, 'mobile.tsx'],
  },
};
