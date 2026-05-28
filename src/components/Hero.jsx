import heroImg from '../assets/hero/hero.png'

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24"
      style={{
        background: 'linear-gradient(150deg, #5C314D 0%, #8E5D79 28%, #C99BB2 58%, #EADBE3 80%, #F7F1F4 100%)',
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-end">

          {/* Esquerda: texto */}
          <div>
            <span className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-7">
              Portal Educativo · Projeto de Extensão Universitária
            </span>

            <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              Navegar<br />sem Medo
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-9 max-w-sm">
              Informação, acolhimento e orientação sobre{' '}
              <span className="text-white font-semibold">violência digital</span> e{' '}
              <span className="text-white font-semibold">cyberbullying</span>.
              Conhecimento que protege e fortalece.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#violencia-digital"
                className="inline-block bg-white text-vinho font-semibold px-6 py-3 rounded-lg hover:bg-bege transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Começar a aprender
              </a>
              <a
                href="#como-denunciar"
                className="inline-block border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/15 transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Como denunciar
              </a>
            </div>

            {/* Indicadores */}
            <div className="border-t border-white/35 pt-6">
              <div className="flex gap-0">
                {[
                  { numero: '70%', descricao: 'jovens afetados online¹' },
                  { numero: '0', descricao: 'culpa da vítima' },
                  { numero: '24h', descricao: 'canais de apoio' },
                ].map((item, i) => (
                  <div
                    key={item.descricao}
                    className={`${i > 0 ? 'border-l border-white/25 pl-7' : ''} ${i < 2 ? 'pr-7' : ''}`}
                  >
                    <div className="font-display text-3xl text-white font-semibold leading-none">{item.numero}</div>
                    <div className="text-white/75 text-xs mt-1.5 leading-snug">{item.descricao}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-xs mt-4">
                ¹ Dado aproximado com base em pesquisas nacionais.
              </p>
            </div>
          </div>

          {/* Direita: imagem */}
          <div className="relative hidden md:flex items-end justify-center">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[80%] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 85%, rgba(247,241,244,0.25) 0%, transparent 70%)',
              }}
            />
            <img
              src={heroImg}
              alt="Ilustração representando navegação segura na internet"
              className="relative w-full object-contain drop-shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
