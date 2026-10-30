import Section from './Section.jsx'
import { publico } from '../data/content.js'

export default function Audience() {
  return (
    <Section id="publico" titulo="Público-Alvo">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {publico.map((item) => (
          <article key={item.titulo} className="rounded-lg bg-fundo-alt p-6">
            <h3 className="mb-2 text-xl font-bold">{item.titulo}</h3>
            <p className="text-[0.95rem] text-texto-claro">{item.texto}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
