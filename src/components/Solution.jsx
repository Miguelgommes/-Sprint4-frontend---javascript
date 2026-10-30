import Section from './Section.jsx'
import { solucao, beneficios } from '../data/content.js'

function CardTexto({ titulo, children }) {
  return (
    <article className="mb-7 rounded-md border-l-4 border-primaria bg-fundo p-6">
      <h3 className="mb-2 text-xl font-bold">{titulo}</h3>
      {children}
    </article>
  )
}

export default function Solution() {
  return (
    <Section id="solucao" titulo="A Solução" fundo="branco">
      {solucao.map((item) => (
        <CardTexto key={item.titulo} titulo={item.titulo}>
          <p>{item.texto}</p>
        </CardTexto>
      ))}

      <CardTexto titulo="Benefícios">
        <ul>
          {beneficios.map((b) => (
            <li key={b} className="relative py-1 pl-5 before:absolute before:left-0 before:font-bold before:text-primaria before:content-['✓']">
              {b}
            </li>
          ))}
        </ul>
      </CardTexto>
    </Section>
  )
}
