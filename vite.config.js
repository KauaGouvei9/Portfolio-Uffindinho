import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativo: os assets sao referenciados como "./assets/..." e funcionam
// em qualquer caminho do GitHub Pages, independente do nome do repositorio e
// da caixa das letras (Portfolio-Uffindinho vs portfolio-uffindinho).
// So funciona porque as rotas usam HashRouter — nao ha navegacao real de path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
