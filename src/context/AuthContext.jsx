import { createContext, useCallback, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { usuarios } from '../data/users.js'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useLocalStorage('jovi:usuario', null)

  const entrar = useCallback(
    (email, senha) => {
      const encontrado = usuarios.find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.senha === senha,
      )
      if (!encontrado) return false
      setUsuario({ email: encontrado.email, nome: encontrado.nome })
      return true
    },
    [setUsuario],
  )

  const sair = useCallback(() => setUsuario(null), [setUsuario])

  const valor = useMemo(() => ({ usuario, entrar, sair }), [usuario, entrar, sair])

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}
