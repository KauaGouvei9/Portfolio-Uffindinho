import { Link } from 'react-router-dom'
import { Lightbulb, MoveRight, PencilRuler, TestTubeDiagonal } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { fases } from '../data/roadmap'
import pagina from './Pagina.module.css'
import estilos from './ComingSoon.module.css'

// icone especifico por fase — a pagina nao e um erro, e uma etapa futura
const ICONES = {
  ideacao: Lightbulb,
  prototipacao: PencilRuler,
  avaliacao: TestTubeDiagonal,
}

export default function ComingSoon({ faseId }) {
  const fase = fases.find((item) => item.id === faseId)
  if (!fase) return null

  const Icone = ICONES[faseId] ?? Lightbulb

  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: fase.nome }]} />

      <header className={pagina.cabecalho}>
        <h1>{fase.nome}</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{fase.descricao}</p>
      </header>

      <section className={`malha ${estilos.bloco}`} aria-labelledby="titulo-em-breve">
        <Icone className={estilos.icone} size={64} strokeWidth={1.25} aria-hidden="true" />
        <h2 id="titulo-em-breve">{fase.nome}</h2>
        <p className={estilos.texto}>
          O conteúdo desta etapa será publicado assim que o grupo concluir a fase.
        </p>

        <div className={estilos.atalhos}>
          <Link className={estilos.atalho} to="/roadmap">
            Ver o roadmap <MoveRight size={15} aria-hidden="true" />
          </Link>
          <Link className={estilos.atalho} to="/imersao/hmw">
            Ver a Imersão <MoveRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
