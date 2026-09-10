import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import estilos from './PhaseCard.module.css'

/**
 * Ficha de uma entrega.
 * Vira <Link> quando recebe rota e <article> quando nao recebe.
 *
 * props: nome, descricao, rota, rotuloLink
 */
export default function PhaseCard({ nome, descricao, rota, rotuloLink = 'Saiba mais' }) {
  const Elemento = rota ? Link : 'article'
  const propsElemento = rota ? { to: rota } : {}

  return (
    <Elemento className={estilos.ficha} {...propsElemento}>
      <h3 className={estilos.nome}>{nome}</h3>
      {descricao && <p className={estilos.descricao}>{descricao}</p>}

      {rota && (
        <span className={estilos.setaLink}>
          {rotuloLink} <MoveRight size={15} aria-hidden="true" />
        </span>
      )}
    </Elemento>
  )
}
