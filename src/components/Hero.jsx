import Button from './Button.jsx'

export default function Hero() {
  return (
    <section id="inicio">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-12 text-center md:grid-cols-2 md:py-20 md:text-left">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">JOVI STUDY CAM</h1>
          <p className="mx-auto mb-7 max-w-md text-lg text-texto-claro md:mx-0">
            A câmera do celular com IA integrada que transforma qualquer conteúdo fotografado em resumo e quiz para você estudar melhor.
          </p>
          <Button href="#solucao">Conheça a solução</Button>
        </div>

        <figure className="text-center">
          <video
            className="pointer-events-none mx-auto block max-h-[640px] w-[min(100%,360px)] rounded-[28px] bg-black shadow-xl shadow-primaria-escura/20"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Demonstração da câmera JOVI com inteligência artificial"
          >
            <source src="/images/camera-jovi-ia.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
          <figcaption className="mt-2 text-sm text-texto-claro">Câmera JOVI + IA</figcaption>
        </figure>
      </div>
    </section>
  )
}
