import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { equipe } from '../data/equipe'
import { projeto } from '../data/projeto'
import pagina from './Pagina.module.css'
import estilos from './Equipe.module.css'

const imagemMascote = `${import.meta.env.BASE_URL}assets/uffindinho.png`

export default function Equipe() {
  const localizacao = useLocation()
  const sobreRef = useRef(null)

  // o mascote da Home chega aqui pedindo para rolar ate a secao sobre ele
  useEffect(() => {
    if (localizacao.state?.rolarPara !== 'sobre-uffindinho') return

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    sobreRef.current?.scrollIntoView({
      behavior: reduzido ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [localizacao.state])

  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Equipe' }]} />

      <header className={pagina.cabecalho}>
        <h1>Equipe</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          Somos o {projeto.grupo} da disciplina de Interação Humano-Computador, e estas
          são as pessoas que estão construindo o {projeto.nome}.
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

      <section
        className={estilos.sobreMascote}
        id="sobre-uffindinho"
        ref={sobreRef}
        aria-labelledby="titulo-mascote"
      >
        <img
          className={estilos.retratoMascote}
          src={imagemMascote}
          alt={`${projeto.mascote}, mascote do projeto`}
          width="280"
          height="270"
          loading="lazy"
        />

        <div className={estilos.textoMascote}>
          <h2 id="titulo-mascote">{projeto.sobreMascote.titulo}</h2>
          {projeto.sobreMascote.paragrafos.map((paragrafo, indice) => (
            <p key={indice} className={estilos.paragrafoMascote}>
              {paragrafo}
            </p>
          ))}
        </div>
      </section>

      <p className={estilos.nota}>
        Os links de perfil são placeholders. Para publicá-los, edite os campos{' '}
        <code>github</code> e <code>linkedin</code> em <code>src/data/equipe.js</code>.
      </p>
    </div>
  )
}
