// Limite de acerto (70%) para considerar um tema "ponto forte".
export const LIMITE_FORTE = 0.7

// Agrupa as respostas por tema: [{ tema, acertos, total }]
export function agruparPorTema(perguntas, respostas) {
  const mapa = {}
  perguntas.forEach((p) => {
    mapa[p.tema] ??= { tema: p.tema, acertos: 0, total: 0 }
    mapa[p.tema].total += 1
    if (respostas[p.id] === p.correta) mapa[p.tema].acertos += 1
  })
  return Object.values(mapa)
}

// Soma vários resultados salvos e devolve temas com percentual, do pior ao melhor.
export function consolidarTemas(historico) {
  const mapa = {}
  historico.forEach((resultado) => {
    resultado.temas.forEach((t) => {
      mapa[t.tema] ??= { tema: t.tema, acertos: 0, total: 0 }
      mapa[t.tema].acertos += t.acertos
      mapa[t.tema].total += t.total
    })
  })
  return Object.values(mapa)
    .map((t) => ({ ...t, pct: t.total ? t.acertos / t.total : 0 }))
    .sort((a, b) => a.pct - b.pct)
}
