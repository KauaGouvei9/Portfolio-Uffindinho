import { useEffect, useRef, useState } from 'react'
import { Clock, WifiOff } from 'lucide-react'
import estilos from './MiroEmbed.module.css'

/**
 * Wrapper reutilizavel para iframes do Miro (ou qualquer embed).
 *
 * props:
 *   src    — URL de embed. Se null/vazio, exibe o card de "em preparacao".
 *   title  — titulo acessivel do quadro (vira aria-label do iframe).
 *   height — altura CSS do wrapper. Default "520px".
 *
 * A altura e aplicada como custom property via ref, para nao usar style inline.
 */
const TEMPO_LIMITE = 12000 // ms ate assumir que o embed nao vai carregar

// so aceita URL http(s) de verdade: assim o texto "COLE_AQUI_O_LINK..."
// que fica em data/embeds.js ate o grupo publicar o board cai no placeholder
// em vez de virar um iframe eternamente carregando.
const ehUrlValida = (valor) => typeof valor === 'string' && /^https?:\/\//i.test(valor.trim())

export default function MiroEmbed({ src, title, height = '520px' }) {
  const [carregado, setCarregado] = useState(false)
  const [falhou, setFalhou] = useState(false)
  const wrapperRef = useRef(null)
  const placeholderRef = useRef(null)
  const configurado = ehUrlValida(src)

  useEffect(() => {
    const alvo = wrapperRef.current ?? placeholderRef.current
    if (alvo) alvo.style.setProperty('--altura-embed', height)
  }, [height, src, falhou])

  // iframes nem sempre disparam onError; o timeout cobre o caso silencioso
  useEffect(() => {
    if (!configurado || carregado || falhou) return
    const id = setTimeout(() => setFalhou(true), TEMPO_LIMITE)
    return () => clearTimeout(id)
  }, [configurado, carregado, falhou])

  // src ainda nao definido (null) ou ainda com o texto placeholder
  if (!configurado) {
    return (
      <div ref={placeholderRef} className={estilos.placeholder} role="status">
        <Clock className={estilos.icone} size={40} strokeWidth={1.5} aria-hidden="true" />
        <p className={estilos.placeholderTitulo}>{title}</p>
        <p className={estilos.placeholderTexto}>
          Conteúdo em preparação — será publicado em breve
        </p>
      </div>
    )
  }

  // o iframe existe mas nao carregou (board privado, offline, bloqueio)
  if (falhou) {
    return (
      <div ref={placeholderRef} className={estilos.placeholder} role="alert">
        <WifiOff className={estilos.icone} size={40} strokeWidth={1.5} aria-hidden="true" />
        <p className={estilos.placeholderTitulo}>Não foi possível carregar o quadro</p>
        <p className={estilos.placeholderTexto}>
          O board “{title}” não pôde ser exibido aqui. Isso costuma acontecer quando o
          navegador bloqueia conteúdo de terceiros ou o quadro não está público.
        </p>
        <a className={estilos.linkDireto} href={src} target="_blank" rel="noreferrer">
          Abrir o quadro em uma nova aba
        </a>
      </div>
    )
  }

  return (
    <div ref={wrapperRef} className={estilos.wrapper}>
      <iframe
        className={estilos.quadro}
        src={src}
        title={title}
        aria-label={title}
        loading="lazy"
        allow="fullscreen; clipboard-read; clipboard-write"
        allowFullScreen
        onLoad={() => setCarregado(true)}
        onError={() => setFalhou(true)}
      />
      <div
        className={`${estilos.overlay} ${carregado ? estilos.overlayOculto : ''}`}
        aria-hidden={carregado}
      >
        <span className={estilos.pulso} aria-hidden="true" />
        <p>Carregando o quadro…</p>
      </div>
    </div>
  )
}
