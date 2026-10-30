import { useMemo } from 'react'
import Section from '../components/Section.jsx'
import ThemeBars from '../components/ThemeBars.jsx'
import useAuth from '../hooks/useAuth.js'
import useFetch from '../hooks/useFetch.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { consolidarTemas, LIMITE_FORTE } from '../utils/desempenho.js'
import { Link } from 'react-router-dom'

// Rota PRIVADA (protegida por <ProtectedRoute>): histórico do estudante.
export default function Dashboard() {
  const { usuario } = useAuth()
  const [historico, setHistorico] = useLocalStorage(`jovi:historico:${usuario.email}`, [])
  const { dados: revisao } = useFetch('/api/revisao.json')

  const temas = useMemo(() => consolidarTemas(historico), [historico])
  const fracos = temas.filter((t) => t.pct < LIMITE_FORTE)

  const totalAcertos = historico.reduce((s, h) => s + h.acertos, 0)
  const totalPerguntas = historico.reduce((s, h) => s + h.total, 0)
  const media = totalPerguntas ? Math.round((totalAcertos / totalPerguntas) * 100) : 0

  return (
    <Section titulo="Meu Painel" intro={`Olá, ${usuario.nome}! Acompanhe seu histórico e seus pontos fortes e fracos.`}>
      {historico.length === 0 ? (
        <div className="mx-auto max-w-[600px] rounded-[10px] bg-fundo-alt p-8 text-center">
          <p className="mb-5 text-texto-claro">Você ainda não salvou nenhum quiz no histórico.</p>
          <Link to="/quiz" className="inline-block rounded-md bg-primaria px-7 py-3 font-semibold text-white hover:bg-primaria-escura">
            Fazer um quiz
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg bg-fundo-alt p-6">
            <h3 className="mb-4 text-xl font-bold">Resumo</h3>
            <dl className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-md bg-fundo p-4">
                <dt className="text-sm text-texto-claro">Quizzes feitos</dt>
                <dd className="text-3xl font-bold text-primaria-escura">{historico.length}</dd>
              </div>
              <div className="rounded-md bg-fundo p-4">
                <dt className="text-sm text-texto-claro">Média de acertos</dt>
                <dd className="text-3xl font-bold text-primaria-escura">{media}%</dd>
              </div>
            </dl>

            <h3 className="mb-3 mt-6 text-xl font-bold">Desempenho por tema</h3>
            <ThemeBars temas={temas} />
          </article>

          <article className="rounded-lg bg-fundo-alt p-6">
            <h3 className="mb-4 text-xl font-bold">O que revisar</h3>
            {fracos.length === 0 ? (
              <p className="text-texto-claro">Parabéns! Nenhum ponto fraco por enquanto.</p>
            ) : (
              <ul className="grid gap-3">
                {fracos.map((t) => (
                  <li key={t.tema} className="rounded-md border-l-4 border-secundaria bg-fundo p-4">
                    <p className="font-semibold">{t.tema}</p>
                    <p className="text-sm text-texto-claro">{revisao?.[t.tema] ?? 'Releia o conteúdo e refaça o quiz.'}</p>
                  </li>
                ))}
              </ul>
            )}

            <h3 className="mb-3 mt-6 text-xl font-bold">Histórico</h3>
            <ul className="grid gap-2">
              {historico.map((h) => (
                <li key={h.data} className="flex justify-between gap-3 rounded-md bg-fundo p-3 text-sm">
                  <span>
                    {new Date(h.data).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })} · {h.titulo}
                  </span>
                  <strong className="whitespace-nowrap">{h.acertos}/{h.total}</strong>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setHistorico([])}
              className="mt-5 w-full cursor-pointer rounded-md bg-red-700 px-7 py-3 font-semibold text-white hover:bg-red-800 sm:w-fit"
            >
              Limpar histórico
            </button>
          </article>
        </div>
      )}
    </Section>
  )
}
