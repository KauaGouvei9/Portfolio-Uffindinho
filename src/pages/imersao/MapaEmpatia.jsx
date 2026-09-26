import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import Breadcrumb from '../../components/Breadcrumb'
import MiroEmbed from '../../components/MiroEmbed'
import PageNav from '../../components/PageNav'
import { embeds } from '../../data/embeds'
import { mapaEmpatia } from '../../data/mapaEmpatia'
import pagina from '../Pagina.module.css'
import estilos from './MapaEmpatia.module.css'

const caminhoFoto = `${import.meta.env.BASE_URL}${mapaEmpatia.foto.arquivo}`

// a foto e o registro original da dinamica. Se o arquivo ainda nao foi
// adicionado, um aviso ocupa o lugar em vez de uma imagem quebrada.
function FotoCartolina() {
  const [falhou, setFalhou] = useState(false)

  if (falhou) {
    return (
      <div className={estilos.semFoto} role="status">
        <ImageOff className={estilos.semFotoIcone} size={32} strokeWidth={1.5} aria-hidden="true" />
        <p>A foto da cartolina ainda não foi adicionada ao site.</p>
      </div>
    )
  }

  return (
    <figure className={estilos.figura}>
      <img
        className={estilos.foto}
        src={caminhoFoto}
        alt={mapaEmpatia.foto.alt}
        loading="lazy"
        decoding="async"
        width="1280"
        height="720"
        onError={() => setFalhou(true)}
      />
      <figcaption className={estilos.legenda}>{mapaEmpatia.foto.legenda}</figcaption>
    </figure>
  )
}

export default function MapaEmpatia() {
  return (
    <div className={`container ${pagina.pagina}`}>
      <Breadcrumb itens={[{ rotulo: 'Imersão' }, { rotulo: 'Mapa de Empatia' }]} />

      <header className={pagina.cabecalho}>
        <h1>Mapa de Empatia</h1>
        <p className={`textoCorrido ${pagina.intro}`}>
          O ponto de vista do aluno que precisa encontrar uma sala ou um serviço no IC,
          organizado nos campos Diz, Pensa, Faz e Sente.
        </p>
      </header>

      <section aria-labelledby="metodo-empatia">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">01</span>
          <h2 id="metodo-empatia">O método</h2>
        </div>
        {mapaEmpatia.metodo.map((paragrafo, indice) => (
          <p key={indice} className="textoCorrido">
            {paragrafo}
          </p>
        ))}
      </section>

      <section className={pagina.secao} aria-labelledby="registro">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">02</span>
          <h2 id="registro">Registro da dinâmica</h2>
        </div>
        <FotoCartolina />
      </section>

      <section className={pagina.secao} aria-labelledby="campos">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">03</span>
          <h2 id="campos">Os quatro campos</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>
          Em cada quadrante, as perguntas levadas para a dinâmica e as respostas
          anotadas pelos participantes.
        </p>

        <div className={estilos.quadrantes}>
          {mapaEmpatia.campos.map((campo) => (
            <section
              key={campo.id}
              className={estilos.quadrante}
              aria-labelledby={`campo-${campo.id}`}
            >
              <h3 id={`campo-${campo.id}`} className={estilos.quadranteTitulo}>
                {campo.titulo}
              </h3>

              <ul className={estilos.perguntas}>
                {campo.perguntas.map((pergunta) => (
                  <li key={pergunta} className={estilos.pergunta}>
                    {pergunta}
                  </li>
                ))}
              </ul>

              <ul className={estilos.itens}>
                {campo.itens.map((item) => (
                  <li key={item} className={estilos.item}>
                    <span className={estilos.marcador} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className={pagina.secao} aria-labelledby="requisitos">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">04</span>
          <h2 id="requisitos">Requisitos de UX derivados</h2>
        </div>
        <p className={`textoCorrido ${pagina.intro}`}>
          Cada requisito aponta o campo do mapa de onde saiu, para manter a
          rastreabilidade entre o dado coletado e a decisão de design.
        </p>

        <ul className={estilos.requisitos}>
          {mapaEmpatia.requisitos.map((linha) => (
            <li key={linha.requisito} className={estilos.requisito}>
              <span className={estilos.origem}>{linha.origem}</span>
              <h3 className={estilos.requisitoTexto}>{linha.requisito}</h3>
              <p className={estilos.justificativa}>{linha.justificativa}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={pagina.secao} aria-labelledby="versao-digital">
        <div className={pagina.tituloSecao}>
          <span className="numeroLegenda">05</span>
          <h2 id="versao-digital">Quadro digital</h2>
        </div>

        <MiroEmbed src={embeds.mapaEmpatia} title="Mapa de Empatia do UFFIND" />
      </section>

      <PageNav atualId="mapa-empatia" />
    </div>
  )
}
