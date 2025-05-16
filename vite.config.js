import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,  // Render ke PORT env variable ko use kare
    host: true,                      // 0.0.0.0 se bind kare (public access ke liye)
    allowedHosts: 'all',             // Sabhi hostnames ko allow kare
  }
})
