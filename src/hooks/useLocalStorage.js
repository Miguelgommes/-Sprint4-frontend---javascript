import { useEffect, useState } from 'react'

// Hook customizado: useState sincronizado com o localStorage.
export default function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave)
      return salvo !== null ? JSON.parse(salvo) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor))
    } catch {
      /* armazenamento indisponível: mantém só em memória */
    }
  }, [chave, valor])

  return [valor, setValor]
}
