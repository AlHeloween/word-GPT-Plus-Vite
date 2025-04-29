import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [ vue() ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  build: {
    // ← Move it here, under build
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      // keep Office.js external…
      external: ['@microsoft/office-js'],
      output: {
        // …and your manualChunks stay here
        manualChunks: {
          'vendor-vue': ['vue','vue-router','vue-i18n'],
          'vendor-elm': ['element-plus'],
          'office-utils': ['@/utils/common']
        },
        globals: {
          '@microsoft/office-js': 'Office'
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
