import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { competitiva } from '../../data/competitiva'
import { metodos } from '../../data/metodos'
import pagina from '../Pagina.module.css'
import estilos from './AnaliseCompetitiva.module.css'

// mapeia o texto do campo "tipo" para a classe de cor da etiqueta
const CLASSE_TIPO = {
  'Concorrente direto': estilos.direto,
  'Concorrente indireto': estilos.indireto,
  Inspirador: estilos.inspirador,
}

export default function AnaliseCompetitiva() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Análise Competitiva' }]} />

      <header className={pagina.cabecalho}>
        <h1>Análise Competitiva</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Cinco sistemas avaliados lado a lado — dois concorrentes diretos, dois
          indiretos e um inspirador.
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
      </section>

      <section className={pagina.secao} aria-labelledby="tabela-competitiva">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="tabela-competitiva">Comparativo</h2>
        </div>

        <div className={estilos.rolagem} tabIndex="0" role="region" aria-labelledby="tabela-competitiva">
          <table className={estilos.tabela}>
            <caption>
              Sistemas analisados pelo Grupo 3 durante a fase de Imersão.
            </caption>
            <thead>
              <tr>
                <th scope="col">Sistema</th>
                <th scope="col">Tipo</th>
                <th scope="col">Pontos Positivos</th>
                <th scope="col">Pontos Negativos</th>
                <th scope="col">Inspiração</th>
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
                    <ul className={estilos.lista}>
                      {linha.positivos.map((ponto) => (
                        <li key={ponto} className={estilos.itemLista}>
                          <span className={estilos.marcadorPositivo} aria-hidden="true" />
                          {ponto}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className={estilos.lista}>
                      {linha.negativos.map((ponto) => (
                        <li key={ponto} className={estilos.itemLista}>
                          <span className={estilos.marcadorNegativo} aria-hidden="true" />
                          {ponto}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className={estilos.inspiracao}>{linha.inspiracao}</td>
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
