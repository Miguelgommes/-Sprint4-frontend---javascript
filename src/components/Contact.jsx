import { useState } from 'react'
import Section from './Section.jsx'
import Button from './Button.jsx'

const campo =
  'rounded-md border border-[#c9d3d0] bg-fundo p-3 text-base focus:outline-2 focus:outline-offset-1 focus:outline-primaria'

export default function Contact() {
  const [enviado, setEnviado] = useState(false)

  function enviar(evento) {
    evento.preventDefault()
    setEnviado(true)
    evento.target.reset()
  }

  return (
    <Section
      id="contato"
      titulo="Contato"
      intro="Ficou com alguma dúvida ou sugestão sobre o JOVI STUDY CAM? Envie uma mensagem para a equipe."
    >
      <form onSubmit={enviar} className="mx-auto grid max-w-[600px] gap-5 rounded-[10px] bg-fundo-alt p-6 sm:p-8">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-[0.95rem] font-semibold">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required className={campo} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[0.95rem] font-semibold">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required className={campo} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="mensagem" className="text-[0.95rem] font-semibold">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem" required className={campo} />
        </div>

        <Button type="submit" className="w-full sm:w-fit">Enviar mensagem</Button>

        {enviado && (
          <p role="status" className="font-semibold text-primaria">
            Mensagem enviada! Obrigado pelo contato.
          </p>
        )}
      </form>

      <div className="mx-auto mt-6 max-w-[600px] space-y-1 text-center text-[0.95rem] text-texto-claro">
        <p>
          E-mail da equipe:{' '}
          <a href="mailto:jovistudycam@suporte.com" className="hover:text-primaria hover:underline">jovistudycam@suporte.com</a>
        </p>
        <p>
          Redes sociais:{' '}
          <a href="#" className="hover:text-primaria hover:underline">Instagram</a> |{' '}
          <a href="#" className="hover:text-primaria hover:underline">LinkedIn</a>
        </p>
      </div>
    </Section>
  )
}
