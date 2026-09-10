import { Github, Linkedin } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { equipe } from '../data/equipe'
import { projeto } from '../data/projeto'
import pagina from './Pagina.module.css'
import estilos from './Equipe.module.css'

export default function Equipe() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Equipe' }]} />

      <header className={pagina.cabecalho}>
        <h1>Equipe</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Os integrantes do {projeto.grupo}, responsáveis pelo projeto {projeto.nome}.
        </p>
      </header>

      <ul className={estilos.grade}>
        {equipe.map((pessoa) => (
          <li key={pessoa.nome} className={estilos.pessoa}>
            <div className={estilos.topo}>
              <span className={estilos.avatar} aria-hidden="true">
                {pessoa.nome.trim().charAt(0)}
              </span>
              <div>
                <h2 className={estilos.nome}>{pessoa.nome}</h2>
                <p className={estilos.curso}>{pessoa.curso}</p>
              </div>
            </div>

            <div className={estilos.links}>
              <a
                className={estilos.linkPerfil}
                href={pessoa.github}
                aria-label={`GitHub de ${pessoa.nome}`}
              >
                <Github size={17} aria-hidden="true" />
              </a>
              <a
                className={estilos.linkPerfil}
                href={pessoa.linkedin}
                aria-label={`LinkedIn de ${pessoa.nome}`}
              >
                <Linkedin size={17} aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className={estilos.nota}>
        Os links de perfil são placeholders. Para publicá-los, edite os campos{' '}
        <code>github</code> e <code>linkedin</code> em <code>src/data/equipe.js</code>.
      </p>
    </div>
  )
}
