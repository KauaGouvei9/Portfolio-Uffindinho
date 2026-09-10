import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { entregasImersao } from '../data/entregas'
import estilos from './PageNav.module.css'

/**
 * Navegacao "Anterior / Proxima" entre as entregas da Imersao.
 * A ordem vem de data/entregas.js — reordenar aquele array reordena a navegacao,
 * sem tocar em nenhuma pagina.
 */
export default function PageNav({ atualId }) {
  const indice = entregasImersao.findIndex((entrega) => entrega.id === atualId)
  if (indice === -1) return null

  const anterior = entregasImersao[indice - 1]
  const proxima = entregasImersao[indice + 1]
  if (!anterior && !proxima) return null

  return (
    <nav className={estilos.nav} aria-label="Navegação entre entregas da Imersão">
      {anterior && (
        <Link className={estilos.link} to={anterior.rota}>
          <ArrowLeft className={estilos.icone} size={18} aria-hidden="true" />
          <span>
            <span className={estilos.rotulo}>Anterior</span>
            <span className={estilos.titulo}>{anterior.nomeCompleto}</span>
          </span>
        </Link>
      )}

      {proxima && (
        <Link className={`${estilos.link} ${estilos.proxima}`} to={proxima.rota}>
          <span>
            <span className={estilos.rotulo}>Próxima</span>
            <span className={estilos.titulo}>{proxima.nomeCompleto}</span>
          </span>
          <ArrowRight className={estilos.icone} size={18} aria-hidden="true" />
        </Link>
      )}
    </nav>
  )
}
