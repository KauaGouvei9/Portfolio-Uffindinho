import { useState } from 'react'
import { ChevronDown, Download, FileText, MessageSquareDashed, UserRound, Users } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { entrevistas } from '../../data/entrevistas'
import pagina from '../Pagina.module.css'
import estilos from './Entrevistas.module.css'

// caminhos em data/ comecam com "/" — o base do Vite entra aqui
const caminhoTcle = `${import.meta.env.BASE_URL}${entrevistas.tcle.arquivo.replace(/^\//, '')}`

export default function Entrevistas() {
  // o primeiro bloco ja abre; os demais ficam fechados
  const [abertos, setAbertos] = useState(() => [entrevistas.roteiro[0].id])

  const alternar = (id) =>
    setAbertos((atuais) =>
      atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id]
    )

  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Entrevistas' }]} />

      <header className={pagina.cabecalho}>
        <h1>Entrevistas</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Roteiro e TCLE prontos para entrevista semiestruturada individual com alunos do
          IC e visitantes externos. A coleta ainda não foi realizada.
        </p>
      </header>

      <section aria-labelledby="metodo-entrevistas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-entrevistas">A técnica</h2>
        </div>
        {entrevistas.metodo.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="perfis">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="perfis">Perfis previstos</h2>
        </div>

        <ul className={estilos.perfis}>
          {entrevistas.perfis.map((perfil, indice) => {
            const Icone = indice === 0 ? Users : UserRound
            return (
              <li key={perfil.titulo} className={estilos.perfil}>
                <Icone className={estilos.perfilIcone} size={22} aria-hidden="true" />
                <div>
                  <h3 className={estilos.perfilTitulo}>{perfil.titulo}</h3>
                  <p className={estilos.contagem}>
                    {perfil.participantes}{' '}
                    {perfil.participantes === 1 ? 'participante previsto' : 'participantes previstos'}
                  </p>
                  <p className={estilos.perfilDescricao}>{perfil.descricao}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section className={pagina.secao} aria-labelledby="roteiro">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="roteiro">Roteiro</h2>
        </div>

        <div className={estilos.roteiro}>
          {entrevistas.roteiro.map((bloco) => {
            const aberto = abertos.includes(bloco.id)
            return (
              <div key={bloco.id} className={estilos.bloco}>
                <h3>
                  <button
                    type="button"
                    className={`${estilos.gatilho} ${aberto ? estilos.gatilhoAberto : ''}`}
                    aria-expanded={aberto}
                    aria-controls={`painel-${bloco.id}`}
                    id={`gatilho-${bloco.id}`}
                    onClick={() => alternar(bloco.id)}
                  >
                    <ChevronDown
                      className={`${estilos.chevron} ${aberto ? estilos.chevronAberto : ''}`}
                      size={18}
                      aria-hidden="true"
                    />
                    <span className={estilos.blocoTitulo}>{bloco.titulo}</span>
                    <span className={estilos.duracao}>{bloco.duracao}</span>
                  </button>
                </h3>

                {aberto && (
                  <div
                    className={estilos.painel}
                    id={`painel-${bloco.id}`}
                    role="region"
                    aria-labelledby={`gatilho-${bloco.id}`}
                  >
                    {bloco.texto && <p className={estilos.textoBloco}>{bloco.texto}</p>}

                    {bloco.perguntas && (
                      <ul className={estilos.perguntas}>
                        {bloco.perguntas.map((pergunta) => (
                          <li key={pergunta.codigo} className={estilos.pergunta}>
                            <span className={estilos.codigo}>{pergunta.codigo}</span>
                            {pergunta.texto}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="tcle">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">04</span>
          <h2 id="tcle">Consentimento</h2>
        </div>

        <div className={estilos.tcle}>
          <FileText className={estilos.tcleIcone} size={32} strokeWidth={1.5} aria-hidden="true" />
          <div>
            <h3 className={estilos.tcleTitulo}>{entrevistas.tcle.titulo}</h3>
            <p className={estilos.tcleTexto}>{entrevistas.tcle.texto}</p>
            <a className={estilos.botaoDownload} href={caminhoTcle} download>
              <Download size={16} aria-hidden="true" />
              {entrevistas.tcle.rotulo}
            </a>
          </div>
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="resultados">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">05</span>
          <h2 id="resultados">{entrevistas.resultados.titulo}</h2>
        </div>

        <div className={`malha ${pagina.estadoVazio}`}>
          <MessageSquareDashed
            className={pagina.estadoVazioIcone}
            size={36}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className={pagina.estadoVazioTexto}>{entrevistas.resultados.estadoVazio}</p>
        </div>
      </section>

      <PageNav atualId="entrevistas" />
    </div>
  )
}
