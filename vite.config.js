import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base precisa bater com o nome do repositorio no GitHub Pages:
// https://<usuario>.github.io/portfolio-uffindinho/
export default defineConfig({
  base: '/portfolio-uffindinho/',
  plugins: [react()],
})
