import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import useAuth from '../hooks/useAuth.js'

const campo =
  'rounded-md border border-[#c9d3d0] bg-fundo p-3 text-base focus:outline-2 focus:outline-offset-1 focus:outline-primaria'

export default function Login() {
  const { usuario, entrar } = useAuth()
  const navegar = useNavigate()
  const local = useLocation()
  const [erro, setErro] = useState('')

  const destino = local.state?.de || '/painel'

  if (usuario) return <Navigate to={destino} replace />

  function enviar(evento) {
    evento.preventDefault()
    const dados = new FormData(evento.target)
    const ok = entrar(dados.get('email'), dados.get('senha'))
    if (ok) navegar(destino, { replace: true })
    else setErro('E-mail ou senha inválidos.')
  }

  return (
    <Section titulo="Entrar" intro="Acesse sua conta para salvar o histórico de quizzes e ver seus pontos fortes e fracos.">
      <form onSubmit={enviar} className="mx-auto grid max-w-[420px] gap-5 rounded-[10px] bg-fundo-alt p-6 sm:p-8">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[0.95rem] font-semibold">E-mail</label>
          <input type="email" id="email" name="email" placeholder="aluno@jovi.com" required autoComplete="username" className={campo} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="senha" className="text-[0.95rem] font-semibold">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required autoComplete="current-password" className={campo} />
        </div>

        {erro && (
          <p role="alert" className="font-semibold text-red-700">{erro}</p>
        )}

        <Button type="submit" className="w-full">Entrar</Button>

        <p className="text-center text-sm text-texto-claro">
          Usuário de teste: <strong>aluno@jovi.com</strong> · Senha: <strong>jovi123</strong>
        </p>
      </form>
    </Section>
  )
}
