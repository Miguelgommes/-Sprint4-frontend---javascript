// Botão reutilizável: renderiza <a> quando recebe href, senão <button>.
export default function Button({ href, children, className = '', ...rest }) {
  const estilo =
    'inline-block cursor-pointer rounded-md bg-primaria px-7 py-3 text-center font-semibold text-white transition-colors hover:bg-primaria-escura focus-visible:bg-primaria-escura focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaria ' +
    className

  if (href) {
    return (
      <a href={href} className={estilo} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={estilo} {...rest}>
      {children}
    </button>
  )
}
