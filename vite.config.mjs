import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  base: '/',
  define: {
    global: 'window'
  },
  server: {
    open: true,
    port: 3000
  },
  preview: {
    port: 3000
  }
});