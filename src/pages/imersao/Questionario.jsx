import { ClipboardList, ExternalLink, Info, TrendingDown, TrendingUp } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import GraficoBarras from '../../components/GraficoBarras'
import PageNav from '../../components/PageNav'
import { links } from '../../data/embeds'
import { metodos } from '../../data/metodos'
import { questionario } from '../../data/questionario'
import pagina from '../Pagina.module.css'
import estilos from './Questionario.module.css'

export default function Questionario() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Questionário' }]} />

      <header className={pagina.cabecalho}>
        <h1>Questionário</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Técnica quantitativa da Imersão, respondida por {questionario.amostra.total} pessoas
          do Instituto de Computação.
        </p>
      </header>

      <ul className={estilos.destaques}>
        {questionario.destaques.map((destaque) => (
          <li key={destaque.rotulo} className={estilos.destaque}>
            <span className={estilos.destaqueValor}>{destaque.valor}</span>
            <span className={estilos.destaqueRotulo}>{destaque.rotulo}</span>
          </li>
        ))}
      </ul>

      <section className={pagina.secao} aria-labelledby="conclusao">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="conclusao">O que os dados dizem</h2>
        </div>
        <p className={estilos.conclusao}>{questionario.conclusao}</p>

        {metodos.questionario.paragrafos.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="amostra">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="amostra">Quem respondeu</h2>
        </div>
        {questionario.amostra.paragrafos.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      {questionario.secoes.map((secao, indice) => (
        <section key={secao.id} className={pagina.secao} aria-labelledby={secao.id}>
          <div className={pagina.tituloSecao}>
            <span className="numeroLegenda">{String(indice + 3).padStart(2, '0')}</span>
            <h2 id={secao.id}>{secao.titulo}</h2>
          </div>
          <p className={`textoCorrido ${pagina.intro}`}>{secao.intro}</p>

          <GraficoBarras
            dados={secao.dados}
            base={secao.base}
            destaqueAcima={secao.destaqueAcima}
          />

          {secao.nota && (
            <p className={pagina.nota}>
              <Info className={pagina.notaIcone} size={16} aria-hidden="true" />
              {secao.nota}
            </p>
          )}
        </section>
      ))}

      <section className={pagina.secao} aria-labelledby="correlacoes">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">08</span>
          <h2 id="correlacoes">Correlações entre respostas</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{questionario.correlacoes.intro}</p>

        <ul className={estilos.achados}>
          {questionario.correlacoes.achados.map((achado) => {
            const Icone = achado.sinal === 'positivo' ? TrendingUp : TrendingDown
            return (
              <li key={achado.titulo} className={estilos.achado}>
                <Icone className={estilos.achadoIcone} size={22} aria-hidden="true" />
                <div>
                  <h3 className={estilos.achadoTitulo}>{achado.titulo}</h3>
                  <p className={estilos.achadoTexto}>{achado.texto}</p>
                  <p className={estilos.estatistica}>{achado.estatistica}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <p className={pagina.nota}>
          <Info className={pagina.notaIcone} size={16} aria-hidden="true" />
          {questionario.correlacoes.naoConfirmado}
        </p>
      </section>

      <section className={pagina.secao} aria-labelledby="abertas">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">09</span>
          <h2 id="abertas">Temas das respostas abertas</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>{questionario.abertas.intro}</p>

        <GraficoBarras dados={questionario.abertas.dados} base={questionario.abertas.base} />

        <p className={pagina.nota}>
          <Info className={pagina.notaIcone} size={16} aria-hidden="true" />
          {questionario.abertas.nota}
        </p>
      </section>

      <section className={pagina.secao} aria-labelledby="requisitos">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">10</span>
          <h2 id="requisitos">Requisitos que saíram daqui</h2>
        </div>

        <div className={estilos.rolagem} tabIndex="0" role="region" aria-labelledby="requisitos">
          <table className={estilos.tabela}>
            <caption>Requisitos de design derivados das respostas do questionário.</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Requisito</th>
                <th scope="col">O que isso implica</th>
              </tr>
            </thead>
            <tbody>
              {questionario.requisitos.map((requisito, indice) => (
                <tr key={requisito.nome}>
                  <td className={estilos.numeroRequisito}>{indice + 1}</td>
                  <th scope="row" className={estilos.nomeRequisito}>
                    {requisito.nome}
                  </th>
                  <td>{requisito.implicacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="limitacoes">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">11</span>
          <h2 id="limitacoes">Limitações</h2>
        </div>
        <p className="textoCorrido">{questionario.limitacoes}</p>

        <div className={estilos.chamada}>
          <a
            className={estilos.botaoGrande}
            href={links.questionario}
            target="_blank"
            rel="noreferrer"
          >
            <ClipboardList className={estilos.icone} size={22} aria-hidden="true" />
            {metodos.questionario.rotuloBotao}
            <ExternalLink className={estilos.iconeExterno} size={16} aria-hidden="true" />
            <span className="apenasLeitor">(abre em uma nova aba)</span>
          </a>
          <p className={estilos.aviso}>{questionario.fonte}</p>
        </div>
      </section>

      <PageNav atualId="questionario" />
    </div>
  )
}
