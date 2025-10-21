import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Plugin to copy .well-known folder
const copyWellKnownPlugin = () => ({
  name: 'copy-well-known',
  writeBundle() {
    const distDir = 'dist';
    const wellKnownDir = join(distDir, '.well-known');
    
    if (!existsSync(wellKnownDir)) {
      mkdirSync(wellKnownDir, { recursive: true });
    }
    
    // Copy files
    copyFileSync('public/.well-known/apple-app-site-association', join(wellKnownDir, 'apple-app-site-association'));
    copyFileSync('public/.well-known/assetlinks.json', join(wellKnownDir, 'assetlinks.json'));
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyWellKnownPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      '/.well-known/apple-app-site-association': ['Content-Type: application/json'],
      '/.well-known/assetlinks.json': ['Content-Type: application/json']
    }
  }
});
