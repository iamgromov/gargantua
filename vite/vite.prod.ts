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
          manualChunks(id: string) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor';
            }
          }
        }
      }
    }
  })
);
