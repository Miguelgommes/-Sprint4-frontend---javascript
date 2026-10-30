// Container reutilizável de seção: recebe id, título, fundo e conteúdo via props.
export default function Section({ id, titulo, intro, fundo = 'transparent', children }) {
  return (
    <section id={id} className={fundo === 'branco' ? 'bg-fundo-alt' : ''}>
      <div className="mx-auto max-w-[1100px] px-6 py-10 md:py-16">
        {titulo && (
          <h2 className={`text-center text-3xl font-bold ${intro ? 'mb-3' : 'mb-8'}`}>{titulo}</h2>
        )}
        {intro && <p className="mb-8 text-center text-texto-claro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
