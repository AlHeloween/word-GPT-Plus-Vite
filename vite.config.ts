// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Allow '@/' to point to /src
    }
  },
  server: {
    port: 3000,
    open: true, // Automatically open browser
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Example backend API if needed
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  base: './' // Good for local file deployments too
})
