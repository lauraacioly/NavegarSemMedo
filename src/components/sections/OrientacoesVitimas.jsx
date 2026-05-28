const orientacoes = [
  {
    icone: '💙',
    titulo: 'Você não tem culpa',
    texto: 'Nenhuma vítima é responsável pela violência que sofre. Independente do que foi dito, compartilhado ou feito — a responsabilidade é sempre de quem agride.',
  },
  {
    icone: '🔇',
    titulo: 'Bloqueie e reporte',
    texto: 'Se possível, bloqueie o agressor nas plataformas. Isso não significa que você está fugindo — significa que você está protegendo seu espaço.',
  },
  {
    icone: '💬',
    titulo: 'Fale com alguém de confiança',
    texto: 'Compartilhe o que está acontecendo com um familiar, amigo próximo ou profissional. Não carregue isso sozinho — você não precisa.',
  },
  {
    icone: '📋',
    titulo: 'Documente as evidências',
    texto: 'Antes de agir, guarde provas: prints, URLs, datas. Isso vai ser fundamental se você decidir fazer uma denúncia formal.',
  },
  {
    icone: '🏥',
    titulo: 'Cuide da sua saúde mental',
    texto: 'Procure apoio psicológico. Muitas cidades oferecem serviços gratuitos pelo CAPS (Centro de Atenção Psicossocial) ou pelo CRAS.',
  },
  {
    icone: '⚖️',
    titulo: 'Você tem direitos',
    texto: 'A lei protege você. Registrar um Boletim de Ocorrência e buscar um advogado ou a Defensoria Pública são caminhos reais e acessíveis.',
  },
]

export default function OrientacoesVitimas() {
  return (
    <section id="orientacoes" className="bg-offwhite py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="section-subtitle">Para quem está passando por isso</p>
          <h2 className="section-title">Orientações para vítimas</h2>
          <p className="section-text max-w-2xl">
            Se você está vivenciando uma situação de violência digital, saiba que não está
            sozinho e que existem caminhos concretos para se proteger e buscar seus direitos.
          </p>
        </div>

        {/* Mensagem de acolhimento */}
        <div className="bg-vinho text-white rounded-2xl p-7 md:p-10 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-rosa/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <p className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-4">
              "O que aconteceu com você não define quem você é."
            </p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
              Violência digital é um ato de quem agride, não uma consequência de quem é agredido.
              Buscar ajuda é um sinal de força — não de fraqueza.
            </p>
          </div>
        </div>

        {/* Cards de orientação */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {orientacoes.map((item) => (
            <div key={item.titulo} className="card">
              <div className="text-3xl mb-3">{item.icone}</div>
              <h4 className="font-semibold text-vinho mb-2">{item.titulo}</h4>
              <p className="text-sm text-texto/80 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>

        {/* Aviso sobre crise */}
        <div className="alert-box">
          <p className="text-alerta font-semibold mb-2">Em situação de crise ou emergência</p>
          <p className="text-texto/80 text-sm leading-relaxed mb-3">
            Se você ou alguém está em risco imediato, ligue <strong>190 (Polícia Militar)</strong> ou{' '}
            <strong>192 (SAMU)</strong>. Para suporte emocional urgente, entre em contato com o{' '}
            <strong>CVV — Centro de Valorização da Vida</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white rounded-lg px-4 py-2 text-sm font-semibold text-alerta border border-alerta/20">
              CVV: 188 (24h)
            </div>
            <div className="bg-white rounded-lg px-4 py-2 text-sm font-semibold text-texto border border-bege">
              Central 180 — violência contra a mulher
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
