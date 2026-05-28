import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Violência Digital', href: '#violencia-digital' },
  { label: 'Cyberbullying', href: '#cyberbullying' },
  { label: 'Como Identificar', href: '#como-identificar' },
  { label: 'Impactos', href: '#impactos' },
  { label: 'Guardar Provas', href: '#guardar-provas' },
  { label: 'Como Denunciar', href: '#como-denunciar' },
  { label: 'Links Úteis', href: '#links-uteis' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 20)
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        rolado
          ? 'bg-vinho shadow-lg'
          : 'bg-gradient-to-b from-vinho/70 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#topo"
            className="flex items-center gap-2 group"
            onClick={fecharMenu}
          >
            <svg className="w-7 h-7 text-rosa flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C9.5 3 6.5 4.5 4 6c0 6 2.5 11 8 14 5.5-3 8-8 8-14-2.5-1.5-5.5-3-8-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            <div className="leading-tight">
              <span className="font-display text-lg font-semibold text-white tracking-wide">
                Navegar sem Medo
              </span>
            </div>
          </a>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-150 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Abrir menu"
          >
            {menuAberto ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="lg:hidden bg-vinho border-t border-white/10">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={fecharMenu}
                className="text-white/80 hover:text-white py-2 px-3 rounded-md hover:bg-white/10 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
