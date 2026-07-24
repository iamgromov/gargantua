import { defineConfig, mergeConfig } from 'vite';

import { baseConfig } from './vite.base';

export default defineConfig(
  mergeConfig(baseConfig, {
    server: {
      port: 3000,
      open: true,
    },
  })
);
