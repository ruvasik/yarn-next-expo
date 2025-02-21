import { tokens, themes, defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';

const appConfig = createTamagui({
  tokens,
  themes,
  components: {
    // Определяй свои компоненты, если нужно
  },
});

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
