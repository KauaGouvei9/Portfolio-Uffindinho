import { BookMarked, ExternalLink, Info } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import MiroEmbed from '../../components/MiroEmbed'
import PageNav from '../../components/PageNav'
import { embeds } from '../../data/embeds'
import { avisoSemReferencias, quadrantes, referencias } from '../../data/csd'
import { metodos } from '../../data/metodos'
import pagina from '../Pagina.module.css'
import estilos from './MatrizCSD.module.css'

export default function MatrizCSD() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Matriz CSD' }]} />

      <header className={pagina.cabecalho}>
        <h1>Matriz CSD</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Certezas, Suposições e Dúvidas sobre o problema de localização no
          Instituto de Computação. É o ponto de partida do desk research.
        </p>
      </header>

      <section aria-labelledby="metodo-csd">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-csd">O método</h2>
        </div>
        {metodos.matrizCSD.paragrafos.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="quadrantes">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="quadrantes">Os três quadrantes</h2>
        </div>

        <div className={estilos.quadrantes}>
          {quadrantes.map((quadrante) => (
            <section
              key={quadrante.id}
              className={estilos.quadrante}
              aria-labelledby={`quadrante-${quadrante.id}`}
            >
              <h3 id={`quadrante-${quadrante.id}`} className={estilos.quadranteTitulo}>
                {quadrante.titulo}
              </h3>
              <p className={estilos.quadranteDescricao}>{quadrante.descricao}</p>
              <p className={estilos.quadranteNota}>{quadrante.nota}</p>
            </section>
          ))}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="board-csd">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="board-csd">O board</h2>
        </div>

        <MiroEmbed src={embeds.matrizCSD} title="Matriz CSD do Uffindinho" height="600px" />

        <p className={pagina.nota}>
          <Info className={pagina.notaIcone} size={16} aria-hidden="true" />
          {metodos.matrizCSD.nota}
        </p>
      </section>

      <section className={pagina.secao} aria-labelledby="referencias">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">04</span>
          <h2 id="referencias">Referências das certezas</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>
          Uma certeza só se sustenta se puder ser verificada. A numeração abaixo
          corresponde à numeração das certezas no board.
        </p>

        {referencias.length > 0 ? (
          <ol className={estilos.referencias}>
            {referencias.map((referencia) => (
              <li key={referencia.numero} className={estilos.referencia}>
                <span className={estilos.numeroReferencia} aria-hidden="true">
                  [{referencia.numero}]
                </span>
                <div className={estilos.corpoReferencia}>
                  <p className={estilos.certeza}>{referencia.certeza}</p>
                  <p className={estilos.verificacao}>{referencia.verificacao}</p>
                  {referencia.url ? (
                    <a
                      className={estilos.linkReferencia}
                      href={referencia.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {referencia.fonte}
                      <ExternalLink size={13} aria-hidden="true" />
                      <span className="apenasLeitor">(abre em uma nova aba)</span>
                    </a>
                  ) : (
                    <p className={estilos.fonteSemLink}>{referencia.fonte}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className={`malha ${pagina.estadoVazio}`}>
            <BookMarked
              className={pagina.estadoVazioIcone}
              size={36}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className={pagina.estadoVazioTexto}>{avisoSemReferencias}</p>
          </div>
        )}
      </section>

      <PageNav atualId="matriz-csd" />
    </div>
  )
}
