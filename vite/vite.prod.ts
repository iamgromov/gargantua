import { defineConfig, mergeConfig } from 'vite';

import { baseConfig } from './vite.base';

export default defineConfig(
  mergeConfig(baseConfig, {
    base: '/gargantua',
  })
);
