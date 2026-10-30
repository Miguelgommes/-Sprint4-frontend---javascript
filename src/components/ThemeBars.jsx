import { LIMITE_FORTE } from '../utils/desempenho.js'

// Barras de desempenho por tema. Recebe [{ tema, acertos, total, pct }] por props.
export default function ThemeBars({ temas }) {
  return (
    <ul className="grid gap-3">
      {temas.map((t) => {
        const pct = Math.round(t.pct * 100)
        const forte = t.pct >= LIMITE_FORTE
        return (
          <li key={t.tema}>
            <div className="mb-1 flex justify-between text-sm font-semibold">
              <span>{t.tema}</span>
              <span className={forte ? 'text-green-700' : 'text-red-700'}>
                {forte ? 'Ponto forte' : 'Ponto fraco'} · {t.acertos}/{t.total} ({pct}%)
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-fundo" role="img" aria-label={`${t.tema}: ${pct}% de acerto`}>
              <div className={`h-full ${forte ? 'bg-green-600' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
