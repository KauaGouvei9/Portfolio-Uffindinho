import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { entregasImersao } from '../../data/entregas'
import { projeto } from '../../data/projeto'
import estilos from './Navbar.module.css'

const LINKS_PRINCIPAIS = [
  { rotulo: 'Início', rota: '/' },
  { rotulo: 'Roadmap', rota: '/roadmap' },
  { rotulo: 'Equipe', rota: '/equipe' },
]

export default function Navbar() {
  const [temSombra, setTemSombra] = useState(false)
  const [dropdownAberto, setDropdownAberto] = useState(false)
  const [drawerAberto, setDrawerAberto] = useState(false)

  const localizacao = useLocation()
  const grupoDropdownRef = useRef(null)
  const botaoMenuRef = useRef(null)
  const drawerRef = useRef(null)
  const botaoFecharRef = useRef(null)

  // sombra suave depois de 60px
  useEffect(() => {
    const aoRolar = () => setTemSombra(window.scrollY > 60)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // fecha tudo ao trocar de rota
  useEffect(() => {
    setDropdownAberto(false)
    setDrawerAberto(false)
  }, [localizacao.pathname])

  // Escape fecha dropdown e drawer; clique fora fecha o que estiver aberto
  useEffect(() => {
    const aoTeclar = (evento) => {
      if (evento.key !== 'Escape') return
      if (drawerAberto) {
        setDrawerAberto(false)
        botaoMenuRef.current?.focus()
      }
      if (dropdownAberto) setDropdownAberto(false)
    }

    const aoClicarFora = (evento) => {
      if (dropdownAberto && !grupoDropdownRef.current?.contains(evento.target)) {
        setDropdownAberto(false)
      }
      if (
        drawerAberto &&
        !drawerRef.current?.contains(evento.target) &&
        !botaoMenuRef.current?.contains(evento.target)
      ) {
        setDrawerAberto(false)
      }
    }

    document.addEventListener('keydown', aoTeclar)
    document.addEventListener('mousedown', aoClicarFora)
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      document.removeEventListener('mousedown', aoClicarFora)
    }
  }, [dropdownAberto, drawerAberto])

  // foco vai para dentro do drawer quando ele abre
  useEffect(() => {
    if (drawerAberto) botaoFecharRef.current?.focus()
  }, [drawerAberto])

  const naImersao = localizacao.pathname.startsWith('/imersao')

  return (
    <header className={`${estilos.navbar} ${temSombra ? estilos.comSombra : ''}`}>
      <div className={`container ${estilos.interno}`}>
        <Link className={estilos.logo} to="/">
            <img
              src={`${import.meta.env.BASE_URL}assets/uffindinho.png`}
              alt=""
              aria-hidden="true"
              width="28"
              height="28"
              className={estilos.logoIcone}
              style={{ objectFit: 'contain' }}
            />
            {projeto.nome}
        </Link>

        {/* --- desktop --- */}
        <nav className={estilos.desktop} aria-label="Navegação principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${estilos.link} ${isActive ? estilos.ativo : ''}`}
          >
            Início
          </NavLink>

          <div
            className={estilos.grupoDropdown}
            ref={grupoDropdownRef}
            onMouseEnter={() => setDropdownAberto(true)}
            onMouseLeave={() => setDropdownAberto(false)}
          >
            <button
              type="button"
              className={`${estilos.link} ${naImersao ? estilos.ativo : ''}`}
              aria-expanded={dropdownAberto}
              aria-haspopup="true"
              onClick={() => setDropdownAberto((aberto) => !aberto)}
            >
              Imersão
              <ChevronDown
                className={`${estilos.chevron} ${dropdownAberto ? estilos.chevronAberto : ''}`}
                size={15}
                aria-hidden="true"
              />
            </button>

            {dropdownAberto && (
              <div className={estilos.dropdown} role="menu" aria-label="Entregas da Imersão">
                {entregasImersao.map((entrega) => (
                  <NavLink
                    key={entrega.id}
                    to={entrega.rota}
                    role="menuitem"
                    className={({ isActive }) =>
                      `${estilos.itemDropdown} ${isActive ? estilos.itemAtivo : ''}`
                    }
                  >
                    {entrega.nomeCompleto}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {LINKS_PRINCIPAIS.filter((item) => item.rota !== '/').map((item) => (
            <NavLink
              key={item.rota}
              to={item.rota}
              className={({ isActive }) => `${estilos.link} ${isActive ? estilos.ativo : ''}`}
            >
              {item.rotulo}
            </NavLink>
          ))}
        </nav>

        {/* --- mobile --- */}
        <button
          type="button"
          ref={botaoMenuRef}
          className={estilos.botaoMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={drawerAberto}
          onClick={() => setDrawerAberto(true)}
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>

      {drawerAberto && (
        <>
          <div className={estilos.fundo} aria-hidden="true" />
          <div
            className={estilos.drawer}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className={estilos.drawerTopo}>
              <span className={estilos.drawerTitulo}>Navegação</span>
              <button
                type="button"
                ref={botaoFecharRef}
                className={estilos.botaoMenu}
                aria-label="Fechar menu de navegação"
                onClick={() => {
                  setDrawerAberto(false)
                  botaoMenuRef.current?.focus()
                }}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <nav className={estilos.drawerCorpo} aria-label="Navegação principal (mobile)">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${estilos.drawerLink} ${isActive ? estilos.drawerLinkAtivo : ''}`
                }
              >
                Início
              </NavLink>

              <p className={estilos.drawerSecao}>Imersão</p>
              {entregasImersao.map((entrega) => (
                <NavLink
                  key={entrega.id}
                  to={entrega.rota}
                  className={({ isActive }) =>
                    `${estilos.drawerLink} ${estilos.drawerSub} ${
                      isActive ? estilos.drawerLinkAtivo : ''
                    }`
                  }
                >
                  {entrega.nomeCompleto}
                </NavLink>
              ))}

              {LINKS_PRINCIPAIS.filter((item) => item.rota !== '/').map((item) => (
                <NavLink
                  key={item.rota}
                  to={item.rota}
                  className={({ isActive }) =>
                    `${estilos.drawerLink} ${isActive ? estilos.drawerLinkAtivo : ''}`
                  }
                >
                  {item.rotulo}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
