import { defineConfig, mergeConfig } from 'vite';

import { baseConfig } from './vite.base';

export default defineConfig(
  mergeConfig(baseConfig, {
    base: '/gargantua',
    build: {
      target: 'es2022',
      sourcemap: false,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  })
);
