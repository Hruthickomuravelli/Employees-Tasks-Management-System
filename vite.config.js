import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,      // ← Force Vite to detect file changes reliably
      interval: 100,         // ← Polling interval in ms
    }
  }
})
