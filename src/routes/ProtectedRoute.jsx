import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

// Rota privada: sem login, redireciona para /login guardando a página pedida.
export default function ProtectedRoute({ children }) {
  const { usuario } = useAuth()
  const local = useLocation()

  if (!usuario) {
    return <Navigate to="/login" replace state={{ de: local.pathname }} />
  }
  return children
}
