import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#inicio',      label: 'Início' },
  { href: '#sobre',       label: 'Quem Somos' },
  { href: '#servicos',    label: 'Serviços' },
  { href: '#galeria',     label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a className="navbar__logo" href="#inicio">
        Esboço<span>Cerimonialistas</span>
      </a>

      <button
        className="navbar__toggle"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
      </button>

      <ul className={`navbar__menu${menuOpen ? ' navbar__menu--open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={close}>{label}</a>
          </li>
        ))}
        <li>
          <a href="#contato" onClick={close} className="navbar__cta">Contato</a>
        </li>
      </ul>
    </nav>
  )
}
