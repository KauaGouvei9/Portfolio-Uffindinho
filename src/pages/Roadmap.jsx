import { Route } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { roadmap } from '../data/roadmap'
import pagina from './Pagina.module.css'
import estilos from './Roadmap.module.css'

export default function Roadmap() {
  // numeracao continua entre os grupos (1..n), como no diagrama da disciplina
  let contador = 0

  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Roadmap' }]} />

      <header className={pagina.cabecalho}>
        <h1>Roadmap</h1>
      </header>

      <section className={estilos.definicao} aria-labelledby="o-que-e">
        <div className={`malha ${estilos.simbolo}`} aria-hidden="true">
          <Route size={56} strokeWidth={1.25} />
        </div>

        <div>
          <h2 id="o-que-e">O que é?</h2>
          {roadmap.definicao.map((paragrafo, indice) => (
            <p key={indice} className={estilos.textoDefinicao}>
              {paragrafo}
            </p>
          ))}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="atividades">
        <h2 id="atividades">Atividades do processo</h2>
        <p className={estilos.introAtividades}>
          As atividades abaixo compõem o percurso completo do projeto, agrupadas pelas
          etapas do processo de design.
        </p>

        <div className={estilos.grupos}>
          {roadmap.grupos.map((grupo) => (
            <section key={grupo.id} className={estilos.grupo} aria-labelledby={`grupo-${grupo.id}`}>
              <h3 id={`grupo-${grupo.id}`} className={estilos.tituloGrupo}>
                {grupo.titulo}
              </h3>

              <ol className={estilos.atividades}>
                {grupo.atividades.map((atividade) => {
                  contador += 1
                  return (
                    <li key={atividade} className={estilos.atividade}>
                      <span className={estilos.numero} aria-hidden="true">
                        {contador}
                      </span>
                      {atividade}
                    </li>
                  )
                })}
              </ol>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
