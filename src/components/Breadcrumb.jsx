import { Link } from 'react-router-dom'
import estilos from './Breadcrumb.module.css'

/**
 * Breadcrumb: Inicio > [Fase] > [Pagina]
 * Recebe uma lista de { rotulo, rota }. O ultimo item e sempre o atual
 * e nunca vira link. Itens sem rota (ex.: o nome da fase) sao texto puro.
 */
export default function Breadcrumb({ itens = [] }) {
  const trilha = [{ rotulo: 'Início', rota: '/' }, ...itens]

  return (
    <nav className={estilos.trilha} aria-label="Trilha de navegação">
      <ol className={estilos.lista}>
        {trilha.map((item, indice) => {
          const ehUltimo = indice === trilha.length - 1

          return (
            <li key={`${item.rotulo}-${indice}`} className={estilos.item}>
              {indice > 0 && (
                <span className={estilos.separador} aria-hidden="true">
                  /
                </span>
              )}
              {ehUltimo || !item.rota ? (
                <span className={ehUltimo ? estilos.atual : undefined} aria-current={ehUltimo ? 'page' : undefined}>
                  {item.rotulo}
                </span>
              ) : (
                <Link className={estilos.link} to={item.rota}>
                  {item.rotulo}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
