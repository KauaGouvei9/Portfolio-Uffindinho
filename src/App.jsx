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

// transicao de rota: unica animacao do site fora do reveal do hero
const transicaoRota = {
  inicial: { opacity: 0 },
  animada: { opacity: 1 },
  saida: { opacity: 0 },
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
          <AnimatePresence mode="wait">
            <motion.div
              key={localizacao.pathname}
              variants={transicaoRota}
              initial="inicial"
              animate="animada"
              exit="saida"
              transition={{ duration: 0.18, ease: 'easeOut' }}
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
