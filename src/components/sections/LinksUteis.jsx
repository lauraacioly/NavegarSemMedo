const links = [
  {
    categoria: 'Denúncia online',
    cor: 'bg-vinho',
    recursos: [
      {
        nome: 'SaferNet Brasil',
        descricao: 'Canal nacional de denúncia de crimes contra direitos humanos na internet, em parceria com a Polícia Federal',
        url: 'https://new.safernet.org.br/denuncie',
      },
      {
        nome: 'Childhood Brasil',
        descricao: 'ONG nacional de proteção de crianças e adolescentes contra violência e exploração sexual online, com canal de denúncia',
        url: 'https://www.childhood.org.br',
      },
    ],
  },
  {
    categoria: 'Apoio e acolhimento',
    cor: 'bg-rosa',
    recursos: [
      {
        nome: 'CVV — Centro de Valorização da Vida',
        descricao: 'Apoio emocional e prevenção do suicídio. Ligue 188 (24h)',
        url: 'https://www.cvv.org.br',
      },
      {
        nome: 'SaferNet Helpline',
        descricao: 'Serviço gratuito e nacional de acolhimento a vítimas de violência online, com atendimento por chat e e-mail',
        url: 'https://helpline.org.br',
      },
    ],
  },
  {
    categoria: 'Informação e educação',
    cor: 'bg-alerta',
    recursos: [
      {
        nome: 'Intervozes',
        descricao: 'Coletivo pelo direito à comunicação e combate a discurso de ódio online',
        url: 'https://intervozes.org.br',
      },
      {
        nome: 'Internet Segura — NIC.br',
        descricao: 'Portal educativo nacional sobre uso seguro e responsável da internet, com materiais para jovens, pais e educadores',
        url: 'https://internetsegura.br',
      },
    ],
  },
  {
    categoria: 'Canais governamentais',
    cor: 'bg-texto',
    recursos: [
      {
        nome: 'ANPD — Autoridade Nacional de Proteção de Dados',
        descricao: 'Órgão federal que recebe denúncias sobre violações de dados pessoais, incluindo exposição indevida de imagens e vazamentos',
        url: 'https://www.gov.br/anpd/pt-br',
      },
      {
        nome: 'Ministério dos Direitos Humanos',
        descricao: 'Disque 100 — denúncias de violações de direitos humanos, incluindo casos envolvendo crianças e adolescentes',
        url: 'https://www.gov.br/mdh/pt-br',
      },
    ],
  },
]

export default function LinksUteis() {
  return (
    <section id="links-uteis" className="bg-bege py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="section-subtitle">Onde buscar ajuda</p>
          <h2 className="section-title">Links úteis de apoio e denúncia</h2>
          <p className="section-text max-w-2xl">
            Organizações, serviços e plataformas que oferecem apoio a vítimas,
            recebem denúncias ou produzem conteúdo educativo sobre segurança digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {links.map((grupo) => (
            <div key={grupo.categoria} className="bg-white rounded-xl overflow-hidden shadow-sm border border-bege">
              <div className={`${grupo.cor} px-5 py-3`}>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                  {grupo.categoria}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                {grupo.recursos.map((r) => (
                  <div key={r.nome} className="flex flex-col gap-1">
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-vinho hover:text-rosa transition-colors text-sm flex items-center gap-1"
                    >
                      {r.nome}
                      <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-xs text-texto/60 leading-relaxed">{r.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 highlight-box text-center">
          <p className="font-display text-vinho text-lg font-medium mb-2">
            Conhecimento protege.
          </p>
          <p className="text-texto/70 text-sm">
            Compartilhe este portal com pessoas que possam precisar dessas informações.
            A prevenção começa com a educação.
          </p>
        </div>
      </div>
    </section>
  )
}
