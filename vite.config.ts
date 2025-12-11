import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const getBase = (): string => {
  if (process.env.NODE_ENV === 'production') return '/gargantua';
  return '/';
};

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
