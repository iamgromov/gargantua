import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const baseConfig = {
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
};
