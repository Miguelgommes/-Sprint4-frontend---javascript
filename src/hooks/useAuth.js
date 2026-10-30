import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

// Hook customizado: acesso ao usuário logado e às funções entrar/sair.
export default function useAuth() {
  const contexto = useContext(AuthContext)
  if (!contexto) throw new Error('useAuth deve ser usado dentro de <AuthProvider>')
  return contexto
}
