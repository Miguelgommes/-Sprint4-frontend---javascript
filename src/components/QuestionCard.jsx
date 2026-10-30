// Pergunta do quiz. Recebe tudo por props (componente controlado pela página).
export default function QuestionCard({ numero, total, pergunta, selecionada, onSelecionar, onProxima, ultima }) {
  return (
    <article className="mx-auto max-w-[700px] rounded-[10px] bg-fundo-alt p-6 sm:p-8">
      <p className="mb-1 text-sm font-semibold text-primaria">
        Pergunta {numero} de {total} · {pergunta.tema}
      </p>

      <div className="mb-5 h-2 overflow-hidden rounded-full bg-fundo" aria-hidden="true">
        <div className="h-full bg-primaria transition-all" style={{ width: `${(numero / total) * 100}%` }} />
      </div>

      <h3 className="mb-5 text-xl font-bold">{pergunta.pergunta}</h3>

      <ul className="grid gap-3" role="radiogroup" aria-label="Alternativas">
        {pergunta.opcoes.map((opcao, indice) => {
          const marcada = selecionada === indice
          return (
            <li key={opcao}>
              <button
                type="button"
                role="radio"
                aria-checked={marcada}
                onClick={() => onSelecionar(indice)}
                className={`w-full cursor-pointer rounded-md border-2 p-3 text-left font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria ${
                  marcada
                    ? 'border-primaria bg-primaria text-white'
                    : 'border-[#c9d3d0] bg-fundo hover:border-primaria'
                }`}
              >
                {opcao}
              </button>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        disabled={selecionada === undefined}
        onClick={onProxima}
        className="mt-6 w-full cursor-pointer rounded-md bg-primaria px-7 py-3 font-semibold text-white transition-colors hover:bg-primaria-escura disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit"
      >
        {ultima ? 'Ver resultado' : 'Próxima'}
      </button>
    </article>
  )
}
