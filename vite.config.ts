import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep .well-known files with their original names
          if (assetInfo.name && assetInfo.name.includes('.well-known')) {
            return assetInfo.name;
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  server: {
    headers: {
      '/.well-known/apple-app-site-association': ['Content-Type: application/json'],
      '/.well-known/assetlinks.json': ['Content-Type: application/json']
    }
  }
});
