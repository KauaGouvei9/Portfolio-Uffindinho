import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { entregasImersao } from '../../data/entregas'
import { fases } from '../../data/roadmap'
import { instituicional, projeto } from '../../data/projeto'
import estilos from './Footer.module.css'

// Logo institucional que simplesmente desaparece se o arquivo nao existir,
// em vez de deixar um icone de imagem quebrada no rodape.
function LogoInstitucional({ arquivo, alt }) {
  const [falhou, setFalhou] = useState(false)
  if (falhou) return null

  return (
    <img
      className={estilos.logo}
      src={`${import.meta.env.BASE_URL}${arquivo}`}
      alt={alt}
      onError={() => setFalhou(true)}
    />
  )
}

export default function Footer() {
  return (
    <footer className={estilos.rodape}>
      <div className={`container ${estilos.interno}`}>
        <div>
          <p className={estilos.marca}>
            <MapPin className={estilos.icone} size={20} aria-hidden="true" />
            {projeto.nome}
          </p>
          <p className={estilos.descricao}>{projeto.tagline}</p>
        </div>

        <nav aria-label="Entregas da Imersão no rodapé">
          <h2 className={estilos.tituloColuna}>Imersão</h2>
          <ul className={estilos.lista}>
            {entregasImersao.map((entrega) => (
              <li key={entrega.id}>
                <Link className={estilos.link} to={entrega.rota}>
                  {entrega.nomeCompleto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Processo de design no rodapé">
          <h2 className={estilos.tituloColuna}>Processo</h2>
          <ul className={estilos.lista}>
            <li>
              <Link className={estilos.link} to="/roadmap">
                Roadmap
              </Link>
            </li>
            {fases
              .filter((fase) => fase.id !== 'imersao')
              .map((fase) => (
                <li key={fase.id}>
                  <Link className={estilos.link} to={fase.rota}>
                    {fase.nome}
                  </Link>
                </li>
              ))}
            <li>
              <Link className={estilos.link} to="/equipe">
                Equipe
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* faixa institucional, repetida ao final de todas as paginas */}
      <div className={estilos.faixa}>
        <div className={`container ${estilos.faixaInterna}`}>
          <div className={estilos.logos}>
            {instituicional.logos.map((logo) => (
              <LogoInstitucional key={logo.arquivo} arquivo={logo.arquivo} alt={logo.alt} />
            ))}
          </div>

          <div className={estilos.creditos}>
            <p className={estilos.disciplina}>
              {instituicional.disciplina} <span aria-hidden="true">|</span>{' '}
              {instituicional.periodo}
            </p>
            <p className={estilos.professora}>
              <strong>Professora</strong> {instituicional.professora}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
