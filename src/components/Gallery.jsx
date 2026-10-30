import Section from './Section.jsx'
import { galeria } from '../data/content.js'

export default function Gallery() {
  return (
    <Section id="galeria" titulo="Galeria" intro="Confira as principais telas do protótipo do JOVI STUDY CAM.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galeria.map((item) => (
          <figure key={item.src}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-auto max-h-[680px] w-full rounded-[14px] bg-[#f4f5f8] object-contain sm:h-[560px] lg:h-[520px]"
            />
            <figcaption className="pt-3 text-center text-lg font-semibold text-primaria-escura">
              {item.legenda}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
