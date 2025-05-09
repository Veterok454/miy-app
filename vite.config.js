import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/miy-app/',

  build: {
    outDir: 'docs',
  },

  plugins: [react()],
});
