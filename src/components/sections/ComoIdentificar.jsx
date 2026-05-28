import imgComoIdentificar from '../../assets/sections/como-identificar.png'

const sinaisVitima = [
  'Mudança repentina de comportamento — tristeza, irritabilidade ou ansiedade sem motivo aparente',
  'Evitar o uso do celular ou computador, ou ao contrário, ficar em estado de alerta constante',
  'Isolamento social, deixar de sair com amigos ou familiares',
  'Queda no rendimento escolar ou no trabalho',
  'Recusar-se a falar sobre o que faz online ou apagar conversas quando alguém se aproxima',
  'Sintomas físicos como dores de cabeça, insônia ou perda de apetite',
  'Comentários sobre sentir-se humilhado, envergonhado ou perseguido',
  'Choro após usar o celular ou redes sociais',
]

const alertasTerceiros = [
  'A pessoa para subitamente de usar redes sociais que antes usava muito',
  'Desaparece de grupos ou comunidades online de forma abrupta',
  'Reage com medo ou agitação ao receber notificações',
  'Fica constrangida quando você vê a tela do celular',
  'Começa a usar perfis anônimos ou secundários',
]

export default function ComoIdentificar() {
  return (
    <section id="como-identificar" className="bg-offwhite py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Cabeçalho com imagem */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <p className="section-subtitle">Reconheça os sinais</p>
            <h2 className="section-title">Como identificar situações de violência online</h2>
            <p className="section-text">
              Muitas vítimas de violência digital não pedem ajuda por vergonha, medo ou porque
              não reconhecem o que está acontecendo como abuso. Saber identificar os sinais
              é o primeiro passo para agir.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={imgComoIdentificar}
              alt="Ilustração sobre como identificar situações de violência online"
              className="w-full max-w-xs md:max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Listas de sinais */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Sinais na vítima */}
          <div>
            <h3 className="font-display text-lg font-semibold text-vinho mb-4 flex items-center gap-2">
              <span className="w-7 h-7 bg-vinho text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Sinais na própria vítima
            </h3>
            <ul className="space-y-3">
              {sinaisVitima.map((sinal, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-texto/80 leading-relaxed">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-rosa block" />
                  {sinal}
                </li>
              ))}
            </ul>
          </div>

          {/* Alertas para terceiros */}
          <div>
            <h3 className="font-display text-lg font-semibold text-vinho mb-4 flex items-center gap-2">
              <span className="w-7 h-7 bg-vinho text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
              Se você conhece uma vítima
            </h3>
            <ul className="space-y-3 mb-6">
              {alertasTerceiros.map((alerta, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-texto/80 leading-relaxed">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-rosa block" />
                  {alerta}
                </li>
              ))}
            </ul>

            <div className="highlight-box">
              <p className="font-semibold text-vinho text-sm mb-1">Como agir se suspeitar?</p>
              <p className="text-texto/80 text-sm leading-relaxed">
                Aborde com empatia e sem julgamento. Diga que você está ali para ouvir,
                não para julgar. Evite minimizar a situação com frases como "é só a internet".
                Incentive a buscar ajuda profissional se necessário.
              </p>
            </div>
          </div>
        </div>

        <div className="alert-box">
          <p className="text-alerta font-semibold mb-1">⚠️ Importante</p>
          <p className="text-texto/80 text-sm leading-relaxed">
            Se você identificou qualquer um desses sinais em si mesmo ou em alguém próximo,
            não espere a situação piorar. Violência digital costuma se intensificar com o tempo
            se não for interrompida. Procure apoio o quanto antes.
          </p>
        </div>
      </div>
    </section>
  )
}
