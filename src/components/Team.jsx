import Section from './Section.jsx'
import { equipe } from '../data/content.js'

function CardIntegrante({ foto, nome, funcao, descricao }) {
  return (
    <article className="rounded-lg bg-fundo p-6 text-center">
      <img src={foto} alt={`Foto de ${nome}`} loading="lazy" className="mx-auto mb-4 h-[110px] w-[110px] rounded-full object-cover" />
      <h3 className="mb-1 text-xl font-bold">{nome}</h3>
      <p className="mb-2 text-sm font-semibold text-primaria">{funcao}</p>
      <p className="text-sm text-texto-claro">{descricao}</p>
    </article>
  )
}

export default function Team() {
  return (
    <Section id="equipe" titulo="Nossa Equipe" fundo="branco">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {equipe.map((pessoa) => (
          <CardIntegrante key={pessoa.nome} {...pessoa} />
        ))}
      </div>
    </Section>
  )
}
