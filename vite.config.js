import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  //base: '/', // Cambiado a raíz para pruebas locales
  //base: '/react-quiz/', // Cambiado a raíz para Github Pages
  base: './', // Cambiado a raíz para Vercel
  plugins: [react()],
});
