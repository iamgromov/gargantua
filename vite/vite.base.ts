import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const baseConfig = {
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: { tsconfigPath: './tsconfig.app.json' },
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        useFlatConfig: true
      },
      overlay: {
        panelStyle: 'top: 0; left: 0; right: 0; bottom: 0; width: 100vw; height: 100vh; max-height: 100vh;'
      },
      terminal: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  }
};
