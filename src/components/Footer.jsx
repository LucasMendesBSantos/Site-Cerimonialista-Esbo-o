import { WHATSAPP } from '../data/config'

const SERVICOS_LINKS = ['Casamentos', 'Aniversários', 'Formaturas', 'Corporativos', 'Debutantes']

const NAV_LINKS = [
  { href: '#inicio',      label: 'Início' },
  { href: '#sobre',       label: 'Quem Somos' },
  { href: '#galeria',     label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato',     label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <span className="footer__brand-name">
            Esboço<span>Cerimonialistas</span>
          </span>
          <p className="footer__brand-text">
            Transformando sonhos em memórias eternas. Assessoria e cerimonial com dedicação, carinho e profissionalismo em cada evento.
          </p>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">Serviços</span>
          <ul>
            {SERVICOS_LINKS.map(s => (
              <li key={s}><a href="#servicos">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">Links</span>
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} EsboçoCerimonialistas. Todos os direitos reservados.
        </p>
        <div className="footer__social">
          <a href="#" className="footer__social-link" aria-label="Instagram">📷</a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            className="footer__social-link"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬
          </a>
        </div>
      </div>
    </footer>
  )
}
