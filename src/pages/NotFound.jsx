import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'

export default function NotFound() {
  return (
    <Section titulo="Página não encontrada" intro="O endereço que você tentou acessar não existe.">
      <div className="text-center">
        <Link
          to="/"
          className="inline-block rounded-md bg-primaria px-7 py-3 font-semibold text-white hover:bg-primaria-escura"
        >
          Voltar para o início
        </Link>
      </div>
    </Section>
  )
}
