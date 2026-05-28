const formas = [
  {
    icone: '💬',
    titulo: 'Assédio online',
    texto: 'Mensagens repetidas e indesejadas, comentários ofensivos, ameaças ou perseguição em redes sociais e aplicativos.',
  },
  {
    icone: '🔥',
    titulo: 'Discurso de ódio',
    texto: 'Conteúdos que incitam discriminação, preconceito ou violência com base em raça, gênero, religião, orientação sexual ou outras identidades.',
  },
  {
    icone: '📷',
    titulo: 'Exposição não consensual',
    texto: 'Divulgação de fotos ou vídeos íntimos sem permissão da pessoa retratada, também chamado de "revenge porn".',
  },
  {
    icone: '🎭',
    titulo: 'Roubo de identidade',
    texto: 'Criação de perfis falsos usando o nome, imagem ou dados de outra pessoa para enganar, difamar ou aplicar golpes.',
  },
  {
    icone: '🔒',
    titulo: 'Stalking digital',
    texto: 'Monitoramento obsessivo da vida de alguém online, acesso não autorizado a dispositivos, contas ou localização.',
  },
  {
    icone: '⚠️',
    titulo: 'Fraudes e golpes',
    texto: 'Manipulação psicológica para obter dados pessoais, dinheiro ou acesso a contas. Inclui phishing e estelionato digital.',
  },
]

export default function ViolenciaDigital() {
  return (
    <section id="violencia-digital" className="bg-offwhite py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="section-subtitle">Entenda o problema</p>
          <h2 className="section-title">O que é Violência Digital?</h2>
          <p className="section-text max-w-2xl">
            Violência digital é qualquer ato de agressão, intimidação, humilhação ou abuso cometido
            por meio de tecnologias digitais — redes sociais, aplicativos de mensagens, e-mail,
            plataformas de jogos ou qualquer ambiente online.
          </p>
        </div>

        <div className="highlight-box mb-10">
          <p className="font-display text-lg text-vinho font-medium italic leading-relaxed">
            "A violência digital causa danos reais à vida das pessoas. O fato de acontecer online
            não torna o sofrimento menos legítimo."
          </p>
        </div>

        <h3 className="font-display text-xl font-semibold text-texto mb-6">
          Principais formas de violência digital
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {formas.map((item) => (
            <div key={item.titulo} className="card">
              <div className="text-3xl mb-3">{item.icone}</div>
              <h4 className="font-semibold text-vinho mb-2">{item.titulo}</h4>
              <p className="text-sm text-texto/80 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 alert-box">
          <p className="text-alerta font-semibold mb-1">Atenção</p>
          <p className="text-texto/80 text-sm leading-relaxed">
            A Lei nº 14.132/2021 (Lei do Stalking) e o Marco Civil da Internet (Lei nº 12.965/2014)
            estabelecem proteções legais contra diversas formas de violência digital no Brasil.
            Essas condutas podem ter consequências criminais para quem as pratica.
          </p>
        </div>
      </div>
    </section>
  )
}
