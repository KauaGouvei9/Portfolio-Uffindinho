import { useState } from 'react'
import {
  ChevronDown,
  Download,
  FileText,
  Info,
  MapPin,
  MessageSquareDashed,
  Users,
} from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { entrevistas } from '../../data/entrevistas'
import pagina from '../Pagina.module.css'
import estilos from './Entrevistas.module.css'

const caminhoTcle = `${import.meta.env.BASE_URL}${entrevistas.tcle.arquivo}`

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
          A técnica qualitativa da nossa Imersão: {entrevistas.tecnica.nome.toLowerCase()} com{' '}
          {entrevistas.perfil.quantidade} alunos de graduação do Instituto de Computação.
        </p>
      </header>

      <section aria-labelledby="tecnica">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="tecnica">A técnica</h2>
        </div>
        {entrevistas.tecnica.paragrafos.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
        <p className={estilos.referencia}>{entrevistas.tecnica.referencia}</p>
      </section>

      <section className={pagina.secao} aria-labelledby="objetivo">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="objetivo">Objetivo</h2>
        </div>
        <p className="textoCorrido">{entrevistas.objetivo.geral}</p>

        <h3 className={estilos.subtitulo}>Objetivos específicos</h3>
        <ul className={estilos.listaMarcada}>
          {entrevistas.objetivo.especificos.map((item) => (
            <li key={item} className={estilos.itemMarcado}>
              <span className={estilos.marcador} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className={pagina.secao} aria-labelledby="perfil">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="perfil">Perfil dos participantes</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{entrevistas.perfil.intro}</p>

        <div className={estilos.cartoes}>
          <div className={estilos.cartao}>
            <Users className={estilos.cartaoIcone} size={22} aria-hidden="true" />
            <div>
              <h3 className={estilos.cartaoTitulo}>{entrevistas.perfil.nome}</h3>
              <p className={estilos.contagem}>
                {entrevistas.perfil.quantidade} participantes
              </p>
              <p className={estilos.cartaoTexto}>{entrevistas.perfil.descricao}</p>
            </div>
          </div>

          <div className={estilos.cartao}>
            <MapPin className={estilos.cartaoIcone} size={22} aria-hidden="true" />
            <div>
              <h3 className={estilos.cartaoTitulo}>
                Modalidade: {entrevistas.modalidade.nome.toLowerCase()}
              </h3>
              <p className={estilos.cartaoTexto}>{entrevistas.modalidade.criterio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="coleta">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">04</span>
          <h2 id="coleta">Coleta de dados</h2>
        </div>
        <p className="textoCorrido">{entrevistas.coleta.intro}</p>
        <ul className={estilos.listaMarcada}>
          {entrevistas.coleta.itens.map((item) => (
            <li key={item} className={estilos.itemMarcado}>
              <span className={estilos.marcador} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className={pagina.secao} aria-labelledby="roteiro">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">05</span>
          <h2 id="roteiro">Roteiro completo</h2>
        </div>

        <dl className={estilos.fichaTecnica}>
          <div className={estilos.fichaItem}>
            <dt>Duração estimada</dt>
            <dd>{entrevistas.infoRoteiro.duracao}</dd>
          </div>
          <div className={estilos.fichaItem}>
            <dt>Materiais</dt>
            <dd>{entrevistas.infoRoteiro.materiais}</dd>
          </div>
        </dl>

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
                    <span className={estilos.blocoNumero} aria-hidden="true">
                      {bloco.numero}
                    </span>
                    <span className={estilos.blocoTitulo}>{bloco.nome}</span>
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
                    {bloco.topicos && (
                      <ul className={estilos.listaMarcada}>
                        {bloco.topicos.map((topico) => (
                          <li key={topico} className={estilos.itemMarcado}>
                            <span className={estilos.marcador} aria-hidden="true" />
                            {topico}
                          </li>
                        ))}
                      </ul>
                    )}

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
          <span className="numeroLegenda">06</span>
          <h2 id="tcle">{entrevistas.tcle.titulo}</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{entrevistas.tcle.intro}</p>

        <div className={estilos.tcle}>
          <FileText className={estilos.tcleIcone} size={28} strokeWidth={1.5} aria-hidden="true" />

          <div className={estilos.tcleCorpo}>
            <dl className={estilos.identificacao}>
              {entrevistas.tcle.identificacao.map((linha) => (
                <div key={linha.rotulo} className={estilos.identificacaoItem}>
                  <dt>{linha.rotulo}</dt>
                  <dd>{linha.valor}</dd>
                </div>
              ))}
            </dl>

            {entrevistas.tcle.secoes.map((secao) => (
              <div key={secao.titulo} className={estilos.tcleSecao}>
                <h3 className={estilos.tcleSecaoTitulo}>{secao.titulo}</h3>
                <p className={estilos.tcleTexto}>{secao.texto}</p>
              </div>
            ))}

            <div className={estilos.declaracao}>
              <h3 className={estilos.tcleSecaoTitulo}>Declaração de consentimento</h3>
              <p className={estilos.tcleTexto}>{entrevistas.tcle.declaracao}</p>
            </div>

            <div className={estilos.assinaturas}>
              {entrevistas.tcle.campos.map((campo) => (
                <div key={campo} className={estilos.campoAssinatura}>
                  <span className={estilos.linhaAssinatura} aria-hidden="true" />
                  <span className={estilos.rotuloAssinatura}>{campo}</span>
                </div>
              ))}
            </div>

            {entrevistas.tcle.arquivoDisponivel ? (
              <a className={estilos.botaoDownload} href={caminhoTcle} download>
                <Download size={16} aria-hidden="true" />
                {entrevistas.tcle.rotulo}
              </a>
            ) : (
              <p className={pagina.nota}>
                <Info className={pagina.notaIcone} size={16} aria-hidden="true" />
                {entrevistas.tcle.avisoSemArquivo}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="analise">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">07</span>
          <h2 id="analise">Análise dos dados</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{entrevistas.analise.intro}</p>

        <ol className={estilos.etapas}>
          {entrevistas.analise.etapas.map((etapa, indice) => (
            <li key={etapa.titulo} className={estilos.etapa}>
              <span className={estilos.numeroEtapa} aria-hidden="true">
                {indice + 1}
              </span>
              <div>
                <h3 className={estilos.etapaTitulo}>{etapa.titulo}</h3>
                <p className={estilos.etapaTexto}>{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={pagina.secao} aria-labelledby="resultados">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">08</span>
          <h2 id="resultados">{entrevistas.resultados.titulo}</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{entrevistas.resultados.intro}</p>

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
