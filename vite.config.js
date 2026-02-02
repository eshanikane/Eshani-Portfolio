import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from a subpath:
  // https://eshanikane.github.io/Eshani-Portfolio/
  base: '/Eshani-Portfolio/',
  plugins: [react()],
})
