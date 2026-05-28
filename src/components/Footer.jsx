const navLinks = [
  { label: 'Violência Digital', href: '#violencia-digital' },
  { label: 'Cyberbullying', href: '#cyberbullying' },
  { label: 'Como Identificar', href: '#como-identificar' },
  { label: 'Impactos', href: '#impactos' },
  { label: 'Guardar Provas', href: '#guardar-provas' },
  { label: 'Como Denunciar', href: '#como-denunciar' },
  { label: 'Orientações', href: '#orientacoes' },
  { label: 'Links Úteis', href: '#links-uteis' },
]

const canaisEmergencia = [
  { nome: 'CVV (apoio emocional)', numero: '188' },
  { nome: 'Polícia Militar', numero: '190' },
  { nome: 'SAMU', numero: '192' },
  { nome: 'Violência contra mulher', numero: '180' },
  { nome: 'Direitos Humanos', numero: '100' },
]

export default function Footer() {
  return (
    <footer className="bg-vinho text-white">
      {/* Bloco principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre o projeto */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-rosa flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C9.5 3 6.5 4.5 4 6c0 6 2.5 11 8 14 5.5-3 8-8 8-14-2.5-1.5-5.5-3-8-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span className="font-display text-xl font-semibold">Navegar sem Medo</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Portal Educativo sobre Violência Digital e Cyberbullying.
              Projeto de Extensão Universitária desenvolvido para informar,
              orientar e acolher vítimas de violência online.
            </p>
            <p className="text-white/40 text-xs">
              Este site é informativo e educativo. Não substitui
              acompanhamento jurídico ou psicológico profissional.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 uppercase tracking-wider text-xs">
              Conteúdo
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergência */}
          <div>
            <h4 className="font-semibold text-white/90 mb-4 uppercase tracking-wider text-xs">
              Canais de emergência
            </h4>
            <ul className="space-y-2">
              {canaisEmergencia.map((c) => (
                <li key={c.numero} className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">{c.nome}</span>
                  <span className="font-bold text-rosa text-sm ml-2">{c.numero}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 bg-white/10 rounded-xl p-4">
              <p className="text-white/80 text-xs leading-relaxed">
                Em caso de perigo imediato, ligue <strong className="text-white">190</strong>.
                Para apoio emocional urgente, o CVV atende 24h pelo{' '}
                <strong className="text-white">188</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <p>
              © {new Date().getFullYear()} Navegar sem Medo — Projeto de Extensão Universitária
            </p>
            <p>
              Desenvolvido com fins educativos · Conteúdo informativo, não jurídico
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
