import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, DoorOpen, Landmark, MapPin, MoveRight, Search } from 'lucide-react'
import PhaseCard from '../components/PhaseCard'
import { projeto } from '../data/projeto'
import { entregasImersao } from '../data/entregas'
import { equipe } from '../data/equipe'
import estilos from './Home.module.css'

// UNICO reveal orquestrado do site: os elementos do hero entram em sequencia.
// Nenhuma outra secao anima no scroll — isso e proposital.
const container = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  oculto: { opacity: 0, y: 8 },
  visivel: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0, 0.2, 1] } },
}

// O caminho respeita o base do Vite (/portfolio-uffindinho/) no GitHub Pages.
const imagemMascote = `${import.meta.env.BASE_URL}assets/uffindinho.png`

// icones da secao "O que estamos construindo", escolhidos em data/projeto.js
const ICONES = { busca: Search, servicos: Landmark, acesso: DoorOpen }

// scroll suave ate a secao da Imersao; respeita prefers-reduced-motion
function rolarParaImersao() {
  const alvo = document.getElementById('imersao')
  if (!alvo) return

  const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  alvo.scrollIntoView({ behavior: reduzido ? 'auto' : 'smooth', block: 'start' })
}

export default function Home() {
  const [imagemFalhou, setImagemFalhou] = useState(false)

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className={estilos.hero} aria-labelledby="titulo-hero">
        <div className={`malha ${estilos.heroMalha}`} aria-hidden="true" />

        <motion.div
          className={`container ${estilos.heroInterno}`}
          variants={container}
          initial="oculto"
          animate="visivel"
        >
          <div className={estilos.heroTexto}>
            <motion.h1 id="titulo-hero" className={estilos.tituloHero} variants={item}>
              {projeto.nome}
            </motion.h1>

            <motion.p className={estilos.tagline} variants={item}>
              {projeto.tagline}
            </motion.p>

            <motion.p className={estilos.descricaoHero} variants={item}>
              {projeto.descricao}
            </motion.p>

            <motion.div variants={item}>
              {/* botao, e nao href="#imersao": com HashRouter o hash e a rota,
                  entao a ancora tradicional quebraria a navegacao */}
              <button type="button" className={estilos.cta} onClick={rolarParaImersao}>
                Ver a fase de Imersão
                <ArrowDown size={16} aria-hidden="true" />
              </button>
            </motion.div>
          </div>

          <motion.div className={estilos.heroImagem} variants={item}>
            {imagemFalhou ? (
              <span
                className={estilos.mascoteFallback}
                role="img"
                aria-label="Uffindinho, mascote do projeto"
              >
                <MapPin size={44} strokeWidth={1.5} aria-hidden="true" />
              </span>
            ) : (
              <img
                className={estilos.mascote}
                src={imagemMascote}
                alt="Uffindinho, mascote do projeto, um personagem que guia usuários pelo IC/UFF"
                width="420"
                height="420"
                onError={() => setImagemFalhou(true)}
              />
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- O QUE ESTAMOS CONSTRUINDO ---------- */}
      <section className={estilos.secao} aria-labelledby="titulo-construindo">
        <div className="container">
          <h2 id="titulo-construindo">O que estamos construindo</h2>
          <p className={estilos.introSecao}>{projeto.contextoConstrucao}</p>

          <ul className={estilos.blocos}>
            {projeto.construindo.map((bloco) => {
              const Icone = ICONES[bloco.icone] ?? Search
              return (
                <li key={bloco.titulo} className={estilos.bloco}>
                  <Icone className={estilos.blocoIcone} size={22} strokeWidth={1.75} aria-hidden="true" />
                  <h3 className={estilos.blocoTitulo}>{bloco.titulo}</h3>
                  <p className={estilos.blocoTexto}>{bloco.texto}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ---------- ENTREGAS DA IMERSAO ---------- */}
      <section className={`${estilos.secao} ${estilos.secaoAlt}`} id="imersao" aria-labelledby="titulo-entregas">
        <div className="container">
          <h2 id="titulo-entregas">Imersão</h2>
          <p className={estilos.introSecao}>
            A etapa de entender o problema, o contexto e as pessoas envolvidas. Cada
            técnica aplicada pelo grupo tem uma página própria.
          </p>

          <div className={estilos.gridEntregas}>
            {entregasImersao.map((entrega) => (
              <PhaseCard
                key={entrega.id}
                nome={entrega.nomeCompleto}
                descricao={entrega.resumo}
                rota={entrega.rota}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EQUIPE ---------- */}
      <section className={estilos.secao} aria-labelledby="titulo-equipe">
        <div className="container">
          <h2 id="titulo-equipe">Equipe</h2>
          <p className={estilos.introSecao}>
            Os integrantes do {projeto.grupo}, responsáveis pelo projeto.
          </p>

          <ul className={estilos.faixaEquipe}>
            {equipe.map((pessoa) => (
              <li key={pessoa.nome} className={estilos.membro}>
                <span className={estilos.avatar} aria-hidden="true">
                  {pessoa.nome.trim().charAt(0)}
                </span>
                <span className={estilos.nomeMembro}>{pessoa.nome}</span>
              </li>
            ))}
          </ul>

          <Link className={estilos.linkEquipe} to="/equipe">
            Conhecer a equipe <MoveRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
