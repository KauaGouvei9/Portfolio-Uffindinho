import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { competitiva, justificativaEscolha } from '../../data/competitiva'
import { metodos } from '../../data/metodos'
import pagina from '../Pagina.module.css'
import estilos from './AnaliseCompetitiva.module.css'

// mapeia o texto do campo "tipo" para a classe de cor da etiqueta
const CLASSE_TIPO = {
  'Concorrente direto': estilos.direto,
  'Concorrente indireto': estilos.indireto,
  Inspirador: estilos.inspirador,
}

const ORDEM_TIPOS = ['Concorrente direto', 'Concorrente indireto', 'Inspirador']

function ListaPontos({ itens, classeMarcador }) {
  if (!itens || itens.length === 0) {
    return <span className={estilos.aPreencher}>A preencher</span>
  }

  return (
    <ul className={estilos.lista}>
      {itens.map((ponto) => (
        <li key={ponto} className={estilos.itemLista}>
          <span className={classeMarcador} aria-hidden="true" />
          {ponto}
        </li>
      ))}
    </ul>
  )
}

export default function AnaliseCompetitiva() {
  const contagem = ORDEM_TIPOS.map((tipo) => ({
    tipo,
    total: competitiva.filter((linha) => linha.tipo === tipo).length,
  }))

  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Análise Competitiva' }]} />

      <header className={pagina.cabecalho}>
        <h1>Análise Competitiva</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          {competitiva.length} sistemas avaliados lado a lado, separados em concorrentes
          diretos, indiretos e inspiradores.
        </p>
      </header>

      <section aria-labelledby="metodo-competitiva">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-competitiva">O método</h2>
        </div>
        {metodos.analiseCompetitiva.paragrafos.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}

        <dl className={estilos.categorias}>
          {contagem.map(({ tipo, total }) => (
            <div key={tipo} className={estilos.categoria}>
              <dt>
                <span className={`${estilos.tipo} ${CLASSE_TIPO[tipo] ?? ''}`}>{tipo}</span>
              </dt>
              <dd className={estilos.categoriaTexto}>
                {total} {total === 1 ? 'sistema' : 'sistemas'} ·{' '}
                {metodos.analiseCompetitiva.categorias[tipo]}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={pagina.secao} aria-labelledby="justificativa">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="justificativa">Por que estes sistemas</h2>
        </div>
        {justificativaEscolha.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="tabela-competitiva">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="tabela-competitiva">Comparativo</h2>
        </div>

        <div
          className={estilos.rolagem}
          tabIndex="0"
          role="region"
          aria-labelledby="tabela-competitiva"
        >
          <table className={estilos.tabela}>
            <caption>Sistemas analisados durante a fase de Imersão.</caption>
            <thead>
              <tr>
                <th scope="col">Sistema</th>
                <th scope="col">Tipo</th>
                <th scope="col">Pontos positivos</th>
                <th scope="col">Pontos negativos</th>
                <th scope="col">Ideia para o design futuro</th>
              </tr>
            </thead>
            <tbody>
              {competitiva.map((linha) => (
                <tr key={linha.sistema}>
                  <th scope="row" className={estilos.sistema}>
                    {linha.sistema}
                  </th>
                  <td>
                    <span className={`${estilos.tipo} ${CLASSE_TIPO[linha.tipo] ?? ''}`}>
                      {linha.tipo}
                    </span>
                  </td>
                  <td>
                    <ListaPontos itens={linha.positivos} classeMarcador={estilos.marcadorPositivo} />
                  </td>
                  <td>
                    <ListaPontos itens={linha.negativos} classeMarcador={estilos.marcadorNegativo} />
                  </td>
                  <td className={estilos.inspiracao}>
                    {linha.ideiaDesign || <span className={estilos.aPreencher}>A preencher</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={estilos.dicaScroll}>
          Arraste a tabela para o lado para ver todas as colunas.
        </p>
      </section>

      <PageNav atualId="analise-competitiva" />
    </div>
  )
}
