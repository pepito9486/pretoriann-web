import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acceso desde otros dispositivos (como tu móvil)
    port: 5173       // Fija el puerto para que no cambie
  }
})