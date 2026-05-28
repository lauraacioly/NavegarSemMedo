import imgPressaoDigital from '../../assets/sections/pressão-digital.png'

const impactos = [
  {
    categoria: 'Saúde Mental',
    icone: '🧠',
    cor: 'border-rosa',
    items: [
      'Ansiedade e crises de pânico',
      'Depressão e sentimentos de desesperança',
      'Baixa autoestima e vergonha',
      'Pensamentos autodestrutivos em casos mais graves',
      'Transtorno de estresse pós-traumático (TEPT)',
    ],
  },
  {
    categoria: 'Vida Social',
    icone: '🤝',
    cor: 'border-vinho',
    items: [
      'Isolamento e afastamento de amigos e família',
      'Dificuldade de confiar em pessoas',
      'Abandono de grupos e espaços sociais',
      'Prejuízo na vida escolar ou profissional',
      'Medo de novas relações online',
    ],
  },
  {
    categoria: 'Saúde Física',
    icone: '🫀',
    cor: 'border-alerta',
    items: [
      'Insônia e distúrbios do sono',
      'Perda ou aumento de apetite',
      'Dores de cabeça e tensão muscular',
      'Fadiga e cansaço crônico',
      'Somatização do sofrimento emocional',
    ],
  },
]

export default function ImpactosEmocionais() {
  return (
    <section id="impactos" className="bg-bege py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Cabeçalho com imagem de pressão digital */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <p className="section-subtitle">Por que isso importa</p>
            <h2 className="section-title">Impactos emocionais e sociais</h2>
            <p className="section-text">
              A violência digital deixa marcas reais e profundas. Por acontecer online, muitas
              pessoas minimizam o sofrimento causado — mas os efeitos psicológicos e sociais
              podem ser tão sérios quanto os de qualquer outra forma de violência.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={imgPressaoDigital}
              alt="Ilustração sobre pressão digital, notificações e sobrecarga online"
              className="w-full max-w-xs md:max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Cards de impacto */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {impactos.map((bloco) => (
            <div key={bloco.categoria} className={`bg-white rounded-xl p-6 border-t-4 shadow-sm ${bloco.cor}`}>
              <div className="text-3xl mb-3">{bloco.icone}</div>
              <h3 className="font-display text-lg font-semibold text-texto mb-4">{bloco.categoria}</h3>
              <ul className="space-y-2">
                {bloco.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-texto/80 leading-relaxed">
                    <span className="flex-shrink-0 text-rosa mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 border border-bege shadow-sm">
          <h3 className="font-display text-xl font-semibold text-vinho mb-4">
            Nenhum sofrimento é exagerado
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-texto/80 leading-relaxed">
            <p>
              Frases como "é só a internet" ou "não leva a sério" são prejudiciais e ignoram
              a gravidade do problema. O ambiente digital é uma extensão do mundo real, e
              o sofrimento causado por violência online é completamente legítimo.
            </p>
            <p>
              Buscar apoio psicológico não é fraqueza — é um ato de autocuidado. Se você ou
              alguém que você conhece está passando por isso, procurar ajuda profissional é
              um passo importante e corajoso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
