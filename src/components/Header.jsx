import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { menu } from '../data/content.js'
import useAuth from '../hooks/useAuth.js'

const linkClasse =
  'block border-b-2 border-transparent py-2 font-semibold text-texto hover:border-primaria hover:text-primaria focus-visible:border-primaria focus-visible:text-primaria md:py-1'

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const { usuario, sair } = useAuth()
  const navegar = useNavigate()

  const fechar = () => setAberto(false)

  function aoSair() {
    sair()
    fechar()
    navegar('/')
  }

  return (
    <header className="sticky top-0 z-10 bg-fundo-alt shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <Link to="/" onClick={fechar} className="font-titulo text-2xl font-bold text-primaria-escura">
          JOVI<span className="text-secundaria">STUDY CAM</span>
        </Link>

        {/* Botão hambúrguer: visível apenas em telas menores que md */}
        <button
          type="button"
          className="rounded-md p-2 text-primaria-escura hover:bg-fundo md:hidden"
          aria-label="Abrir ou fechar o menu"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto(!aberto)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {aberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          id="menu-principal"
          aria-label="Menu principal"
          className={`${aberto ? 'block' : 'hidden'} absolute left-0 top-full w-full bg-fundo-alt px-6 pb-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] md:static md:block md:w-auto md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
            {menu.map((item) => (
              <li key={item.id}>
                <Link to={{ pathname: '/', hash: `#${item.id}` }} onClick={fechar} className={linkClasse}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <NavLink
                to="/quiz"
                onClick={fechar}
                className={({ isActive }) => `${linkClasse} ${isActive ? 'border-primaria text-primaria' : ''}`}
              >
                Quiz
              </NavLink>
            </li>

            {usuario ? (
              <>
                <li>
                  <NavLink
                    to="/painel"
                    onClick={fechar}
                    className={({ isActive }) => `${linkClasse} ${isActive ? 'border-primaria text-primaria' : ''}`}
                  >
                    Meu Painel
                  </NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={aoSair}
                    className="w-full cursor-pointer rounded-md border border-primaria px-4 py-1.5 text-left font-semibold text-primaria hover:bg-primaria hover:text-white md:w-auto"
                  >
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={fechar}
                  className="block rounded-md bg-primaria px-4 py-1.5 text-center font-semibold text-white hover:bg-primaria-escura"
                >
                  Entrar
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
