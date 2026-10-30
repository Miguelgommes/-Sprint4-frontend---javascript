import { useEffect, useState } from 'react'

// Hook customizado: consome uma API (GET) e devolve { dados, carregando, erro }.
// Cancela a requisição se o componente for desmontado.
export default function useFetch(url) {
  const [estado, setEstado] = useState({ dados: null, carregando: true, erro: null })

  useEffect(() => {
    const controle = new AbortController()
    setEstado({ dados: null, carregando: true, erro: null })

    fetch(url, { signal: controle.signal })
      .then((resposta) => {
        if (!resposta.ok) throw new Error(`Falha ao carregar (${resposta.status})`)
        return resposta.json()
      })
      .then((dados) => setEstado({ dados, carregando: false, erro: null }))
      .catch((erro) => {
        if (erro.name !== 'AbortError') {
          setEstado({ dados: null, carregando: false, erro: erro.message })
        }
      })

    return () => controle.abort()
  }, [url])

  return estado
}
