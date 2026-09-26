import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { projeto } from '../../data/projeto'
import { formatoProblema } from '../../data/hmw'
import pagina from '../Pagina.module.css'
import estilos from './HMW.module.css'

// destaca [QUEM], [O QUE] e [METAS DE DESIGN] sem mudar o texto em data/hmw.js
function Formula() {
  const partes = formatoProblema.formula.split(/(\[[^\]]+\])/g)

  return (
    <p className={estilos.formula}>
      {partes.map((parte, indice) =>
        parte.startsWith('[') ? (
          <span key={indice} className={estilos.campo}>
            {parte}
          </span>
        ) : (
          parte
        )
      )}
    </p>
  )
}

function ListaCampo({ itens }) {
  return (
    <ul className={estilos.lista}>
      {itens.map((texto) => (
        <li key={texto} className={estilos.itemLista}>
          <span className={estilos.marcador} aria-hidden="true" />
          {texto}
        </li>
      ))}
    </ul>
  )
}

export default function HMW() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'How Might We' }]} />

      <header className={pagina.cabecalho}>
        <h1>How Might We</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{formatoProblema.explicacao}</p>
      </header>

      <section aria-labelledby="o-que-e">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="o-que-e">O que é a técnica</h2>
        </div>
        {formatoProblema.oQueE.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="formato">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="formato">Formato do Problema</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{formatoProblema.introFormato}</p>

        <Formula />

        <div className={estilos.rolagem} tabIndex="0" role="region" aria-labelledby="formato">
          <table className={estilos.tabela}>
            <caption>Os três campos do formato do problema aplicados ao UFFIND.</caption>
            <thead>
              <tr>
                <th scope="col">Quem</th>
                <th scope="col">O que</th>
                <th scope="col">Metas de Design</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ListaCampo itens={formatoProblema.quem} />
                </td>
                <td>
                  <ListaCampo itens={formatoProblema.oQue} />
                </td>
                <td>
                  <ListaCampo itens={formatoProblema.metas} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={estilos.dicaScroll}>Arraste a tabela para o lado para ver as três colunas.</p>
      </section>

      <section className={pagina.secao} aria-labelledby="pergunta-final">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="pergunta-final">Pergunta consolidada</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>
          Os três campos acima, reunidos na pergunta que orienta todas as decisões das
          próximas fases:
        </p>
        <p className={estilos.perguntaFinal}>{projeto.hmw}</p>
      </section>

      <PageNav atualId="hmw" />
    </div>
  )
}
