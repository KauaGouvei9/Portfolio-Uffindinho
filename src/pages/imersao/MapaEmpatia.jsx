import { Info } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import MiroEmbed from '../../components/MiroEmbed'
import PageNav from '../../components/PageNav'
import { embeds } from '../../data/embeds'
import { metodos } from '../../data/metodos'
import pagina from '../Pagina.module.css'

export default function MapaEmpatia() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Mapa de Empatia' }]} />

      <header className={pagina.cabecalho}>
        <h1>Mapa de Empatia</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          O ponto de vista do aluno que precisa encontrar uma sala ou um serviço no IC,
          organizado em seis campos. Construído em cartolina durante a aula; a versão
          digital ainda não foi produzida.
        </p>
      </header>

      <section aria-labelledby="metodo-empatia">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-empatia">O método</h2>
        </div>
        {metodos.mapaEmpatia.paragrafos.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="board-empatia">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="board-empatia">O mapa do grupo</h2>
        </div>

        <MiroEmbed src={embeds.mapaEmpatia} title="Mapa de Empatia — Uffindinho G3" />

        <p className={pagina.nota}>
          <Info className={pagina.notaIcone} size={16} aria-hidden="true" />
          {metodos.mapaEmpatia.nota}
        </p>
      </section>

      <PageNav atualId="mapa-empatia" />
    </div>
  )
}
