
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace <YOUR_REPOSITORY_NAME> with the name of your GitHub repository.
  // For example, if your repository URL is https://github.com/user/my-app,
  // the base should be '/my-app/'.
  base: '/<YOUR_REPOSITORY_NAME>/',
  define: {
    // Vite's way of exposing environment variables to the client.
    // Make sure to prefix them with VITE_
    'process.env.GOOGLE_MAPS_API_KEY': `"${process.env.VITE_GOOGLE_MAPS_API_KEY}"`
  }
});
