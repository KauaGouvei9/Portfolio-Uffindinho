import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import Equipe from './pages/Equipe'
import ComingSoon from './pages/ComingSoon'
import HMW from './pages/imersao/HMW'
import MatrizCSD from './pages/imersao/MatrizCSD'
import AnaliseCompetitiva from './pages/imersao/AnaliseCompetitiva'
import MapaEmpatia from './pages/imersao/MapaEmpatia'
import Entrevistas from './pages/imersao/Entrevistas'
import Questionario from './pages/imersao/Questionario'

import estilos from './App.module.css'

// Transicao de rota: so fade-IN. O fade-out foi removido de proposito:
// com mode="wait" o par saida+entrada deixava a tela em branco por alguns
// frames, e era isso que fazia o conteudo e o rotulo ativo "piscarem".
const transicaoRota = {
  inicial: { opacity: 0 },
  animada: { opacity: 1, transition: { duration: 0.24, ease: [0.2, 0, 0.2, 1] } },
  saida: { opacity: 1, transition: { duration: 0 } },
}

function TopoAoTrocarRota() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  const localizacao = useLocation()

  return (
    // reducedMotion "user": o Framer desliga as animacoes automaticamente
    // para quem configurou movimento reduzido no sistema
    <MotionConfig reducedMotion="user">
      <div className={estilos.app}>
        <a className="pularParaConteudo" href="#conteudo">
          Pular para o conteúdo
        </a>

        <Navbar />
        <TopoAoTrocarRota />

        <main className={estilos.conteudo} id="conteudo">
          {/* initial={false}: a primeira renderizacao entra ja visivel.
              Se a animacao nao rodar (aba em segundo plano, rAF pausado),
              o conteudo nao fica preso em opacity: 0. */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={localizacao.pathname}
              variants={transicaoRota}
              initial="inicial"
              animate="animada"
              exit="saida"
            >
              <Routes location={localizacao}>
                <Route path="/" element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/equipe" element={<Equipe />} />

                <Route path="/imersao/hmw" element={<HMW />} />
                <Route path="/imersao/matriz-csd" element={<MatrizCSD />} />
                <Route path="/imersao/analise-competitiva" element={<AnaliseCompetitiva />} />
                <Route path="/imersao/mapa-empatia" element={<MapaEmpatia />} />
                <Route path="/imersao/entrevistas" element={<Entrevistas />} />
                <Route path="/imersao/questionario" element={<Questionario />} />

                <Route path="/ideacao" element={<ComingSoon faseId="ideacao" />} />
                <Route path="/prototipacao" element={<ComingSoon faseId="prototipacao" />} />
                <Route path="/avaliacao" element={<ComingSoon faseId="avaliacao" />} />

                {/* qualquer rota desconhecida volta para a Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
