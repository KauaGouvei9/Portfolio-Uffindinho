import { Info } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import MiroEmbed from '../../components/MiroEmbed'
import PageNav from '../../components/PageNav'
import { embeds } from '../../data/embeds'
import { metodos } from '../../data/metodos'
import pagina from '../Pagina.module.css'

export default function MatrizCSD() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Matriz CSD' }]} />

      <header className={pagina.cabecalho}>
        <h1>Matriz CSD</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Certezas, Suposições e Dúvidas do grupo sobre o problema de localização no IC.
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

      <section className={pagina.secao} aria-labelledby="board-csd">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="board-csd">O board do grupo</h2>
        </div>

        <MiroEmbed src={embeds.matrizCSD} title="Matriz CSD — Uffindinho G3" />

        <p className={pagina.nota}>
          <Info className={pagina.notaIcone} size={16} aria-hidden="true" />
          {metodos.matrizCSD.nota}
        </p>
      </section>

      <PageNav atualId="matriz-csd" />
    </div>
  )
}
