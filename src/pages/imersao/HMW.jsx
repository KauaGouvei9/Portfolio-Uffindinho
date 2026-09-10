import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { projeto } from '../../data/projeto'
import { formatoProblema } from '../../data/hmw'
import pagina from '../Pagina.module.css'
import estilos from './HMW.module.css'

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
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'How Might We?' }]} />

      <header className={pagina.cabecalho}>
        <h1>How Might We?</h1>
        <p className={`textoCorrido ${pagina.intro}`}>{formatoProblema.oQueEHmw.texto}</p>
      </header>

      <section aria-labelledby="formula">
        <h2 id="formula">A fórmula</h2>
        <Formula />
        <p className={`textoCorrido`}>{formatoProblema.explicacao}</p>
      </section>

      <section className={pagina.secao} aria-labelledby="campos">
        <h2 id="campos">Os três campos</h2>

        <div className={estilos.rolagem} tabIndex="0" role="region" aria-labelledby="campos">
          <table className={estilos.tabela}>
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
        <h2 id="pergunta-final">Pergunta consolidada</h2>
        <p className={estilos.perguntaFinal}>{projeto.hmw}</p>
      </section>

      <PageNav atualId="hmw" />
    </div>
  )
}
