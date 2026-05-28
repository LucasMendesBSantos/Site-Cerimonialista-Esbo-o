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
            <div className="contato__info-icon" aria-hidden="true">📷</div>
            <div>
              <div className="contato__info-label">Instagram</div>
              <div className="contato__info-value">@esbococerimonialistas</div>
            </div>
          </div>

          <div className="contato__info-item">
            <div className="contato__info-icon" aria-hidden="true">📍</div>
            <div>
              <div className="contato__info-label">Localização</div>
              <div className="contato__info-value">Sua cidade, Brasil</div>
            </div>
          </div>

          <div className="contato__social">
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
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
