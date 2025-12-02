import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const getBase = (): string => {
  if (process.env.NODE_ENV === 'production') return '/forno';
  return '/';
};

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
});
