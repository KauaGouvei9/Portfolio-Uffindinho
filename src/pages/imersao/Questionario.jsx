import { ClipboardList, Clock } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import PageNav from '../../components/PageNav'
import { metodos } from '../../data/metodos'
import pagina from '../Pagina.module.css'
import estilos from './Questionario.module.css'

export default function Questionario() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Questionário' }]} />

      <header className={pagina.cabecalho}>
        <h1>Questionário</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Coleta quantitativa complementar às entrevistas, em elaboração pelo grupo.
        </p>
      </header>

      <section aria-labelledby="metodo-questionario">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-questionario">A técnica</h2>
        </div>
        {metodos.questionario.paragrafos.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="participar">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="participar">Participar</h2>
        </div>

        <div className={estilos.chamada}>
          {/* href="#" e aria-disabled: o link existe mas ainda nao leva a lugar nenhum */}
          <a
            className={estilos.botaoGrande}
            href="#"
            aria-disabled="true"
            tabIndex={-1}
            onClick={(evento) => evento.preventDefault()}
          >
            <ClipboardList className={estilos.icone} size={22} aria-hidden="true" />
            {metodos.questionario.rotuloBotao}
          </a>

          <p className={estilos.aviso}>
            <Clock size={16} aria-hidden="true" />
            {metodos.questionario.aviso}
          </p>
        </div>
      </section>

      <PageNav atualId="questionario" />
    </div>
  )
}
