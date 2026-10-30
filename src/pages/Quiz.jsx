import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import QuestionCard from '../components/QuestionCard.jsx'
import ThemeBars from '../components/ThemeBars.jsx'
import useFetch from '../hooks/useFetch.js'
import useAuth from '../hooks/useAuth.js'
import { agruparPorTema } from '../utils/desempenho.js'

export default function Quiz() {
  // Consumo da API própria (public/api/quiz.json)
  const { dados, carregando, erro } = useFetch('/api/quiz.json')
  const { usuario } = useAuth()

  const [atual, setAtual] = useState(0)
  const [respostas, setRespostas] = useState({})
  const [finalizado, setFinalizado] = useState(false)
  const [salvo, setSalvo] = useState(false)

  const perguntas = dados?.perguntas ?? []

  const resultado = useMemo(() => {
    if (!finalizado) return null
    const temas = agruparPorTema(perguntas, respostas)
    const acertos = temas.reduce((soma, t) => soma + t.acertos, 0)
    return {
      titulo: dados.titulo,
      data: new Date().toISOString(),
      acertos,
      total: perguntas.length,
      temas: temas.map((t) => ({ ...t, pct: t.acertos / t.total })),
    }
  }, [finalizado, perguntas, respostas, dados])

  function selecionar(indice) {
    setRespostas({ ...respostas, [perguntas[atual].id]: indice })
  }

  function proxima() {
    if (atual + 1 < perguntas.length) setAtual(atual + 1)
    else setFinalizado(true)
  }

  function reiniciar() {
    setAtual(0)
    setRespostas({})
    setFinalizado(false)
    setSalvo(false)
  }

  function salvarHistorico() {
    const chave = `jovi:historico:${usuario.email}`
    let lista = []
    try {
      lista = JSON.parse(localStorage.getItem(chave)) ?? []
    } catch {
      lista = []
    }
    localStorage.setItem(chave, JSON.stringify([resultado, ...lista]))
    setSalvo(true)
  }

  if (carregando) {
    return (
      <Section titulo="Quiz">
        <p role="status" className="text-center text-texto-claro">Carregando perguntas...</p>
      </Section>
    )
  }

  if (erro) {
    return (
      <Section titulo="Quiz">
        <p role="alert" className="text-center font-semibold text-red-700">
          Não foi possível carregar o quiz: {erro}
        </p>
      </Section>
    )
  }

  if (finalizado && resultado) {
    return (
      <Section titulo="Resultado" intro={resultado.titulo}>
        <div className="mx-auto max-w-[700px] rounded-[10px] bg-fundo-alt p-6 sm:p-8">
          <p className="mb-6 text-center text-2xl font-bold text-primaria-escura">
            Você acertou {resultado.acertos} de {resultado.total}
          </p>

          <h3 className="mb-3 text-xl font-bold">Pontos fortes e fracos</h3>
          <ThemeBars temas={[...resultado.temas].sort((a, b) => a.pct - b.pct)} />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={reiniciar}>Refazer quiz</Button>

            {usuario ? (
              <Button onClick={salvarHistorico} disabled={salvo} className="disabled:opacity-60">
                {salvo ? 'Salvo no histórico ✓' : 'Salvar no meu histórico'}
              </Button>
            ) : (
              <Link
                to="/login"
                state={{ de: '/quiz' }}
                className="inline-block rounded-md border border-primaria px-7 py-3 text-center font-semibold text-primaria hover:bg-primaria hover:text-white"
              >
                Entre para salvar no histórico
              </Link>
            )}
          </div>

          {salvo && (
            <p className="mt-4 text-sm">
              Veja seu histórico completo no{' '}
              <Link to="/painel" className="font-semibold text-primaria underline">Meu Painel</Link>.
            </p>
          )}
        </div>
      </Section>
    )
  }

  return (
    <Section titulo="Quiz" intro={`${dados.titulo} — ${dados.descricao}`}>
      <QuestionCard
        numero={atual + 1}
        total={perguntas.length}
        pergunta={perguntas[atual]}
        selecionada={respostas[perguntas[atual].id]}
        onSelecionar={selecionar}
        onProxima={proxima}
        ultima={atual + 1 === perguntas.length}
      />
    </Section>
  )
}
