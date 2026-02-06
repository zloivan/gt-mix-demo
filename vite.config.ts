import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ВАЖНО: Замени '/gt-mix-demo/' на '/НАЗВАНИЕ-ТВОЕГО-РЕПОЗИТОРИЯ/'
  // Если репозиторий называется gt-mix-demo, оставь как есть.
  base: '/gt-mix-demo/',
});