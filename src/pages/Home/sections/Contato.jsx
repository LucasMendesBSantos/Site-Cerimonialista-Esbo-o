import { useState } from 'react'
import Ornament from '../../../components/Ornament'
import { WHATSAPP } from '../../../data/config'

const INITIAL = { nome: '', email: '', telefone: '', evento: '', data: '', mensagem: '' }

export default function Contato() {
  const [form, setForm] = useState(INITIAL)
  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = [
      'Olá! Vim pelo site e gostaria de saber mais.',
      '',
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Evento: ${form.evento}`,
      `Data prevista: ${form.data}`,
      `Mensagem: ${form.mensagem}`,
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contato" className="contato">
      <div className="contato__grid">
        <div>
          <Ornament />
          <span className="section-label">Contato</span>
          <h2 className="section-title">Vamos conversar sobre seu evento</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            Preencha o formulário ou entre em contato diretamente pelo WhatsApp. Teremos prazer em conhecer a sua história!
          </p>

          <div className="contato__info-item">
            <div className="contato__info-icon" aria-hidden="true">📱</div>
            <div>
              <div className="contato__info-label">WhatsApp</div>
              <div className="contato__info-value">(00) 00000-0000</div>
            </div>
          </div>

          <div className="contato__info-item">
            <div className="contato__info-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div>
              <div className="contato__info-label">Instagram</div>
              <div className="contato__info-value">@esbococerimonialistas</div>
            </div>
          </div>

          <div className="contato__info-item">
            <div className="contato__info-icon" aria-hidden="true">📍</div>
            <div>
              <div className="contato__info-label">Localização</div>
              <div className="contato__info-value">Fortaleza-CE, Brasil</div>
            </div>
          </div>

          <div className="contato__social">
            <a href="https://www.instagram.com/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="social-link"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬
            </a>
            <a href="#" className="social-link" aria-label="Facebook">👤</a>
          </div>
        </div>

        <form className="contato__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">Seu Nome *</label>
              <input
                id="nome" type="text" required
                placeholder="Como podemos te chamar?"
                value={form.nome} onChange={set('nome')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone *</label>
              <input
                id="telefone" type="tel" required
                placeholder="(00) 00000-0000"
                value={form.telefone} onChange={set('telefone')}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              id="email" type="email" required
              placeholder="seu@email.com"
              value={form.email} onChange={set('email')}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="evento">Tipo de Evento</label>
              <select id="evento" value={form.evento} onChange={set('evento')}>
                <option value="">Selecione...</option>
                <option>Casamento</option>
                <option>Aniversário</option>
                <option>Debutante</option>
                <option>Formatura</option>
                <option>Corporativo</option>
                <option>Bodas</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="data">Data Prevista</label>
              <input
                id="data" type="date"
                value={form.data} onChange={set('data')}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              placeholder="Conte-nos mais sobre o seu evento e seus sonhos..."
              value={form.mensagem} onChange={set('mensagem')}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Enviar via WhatsApp 💬
          </button>
        </form>
      </div>
    </section>
  )
}
