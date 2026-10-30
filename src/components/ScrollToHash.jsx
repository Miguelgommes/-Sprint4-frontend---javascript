import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ao trocar de rota/âncora: rola até a seção (#id) ou volta ao topo.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const alvo = document.getElementById(hash.slice(1))
      if (alvo) {
        alvo.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
