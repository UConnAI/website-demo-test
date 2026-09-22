import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages compatibility: allows deployment to any sub-path (e.g. /<repo-name>/) or root
  base: process.env.BASE_PATH || './',
});
