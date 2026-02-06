
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This base path should match your GitHub repository name.
  base: '/gt-mix-demo/',
});
