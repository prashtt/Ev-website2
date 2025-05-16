import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,  // Render ka port use karega ya default 4173
    host: true,                      // 0.0.0.0 pe bind karega, Render ke liye zaroori
    allowedHosts: ['ev-website2-1.onrender.com'], // apna Render domain yahan dalein
  }
})
