import Ornament from '../../../components/Ornament'
import { SERVICOS } from '../../../data/servicos'

export default function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <div className="servicos__header">
        <Ornament center />
        <span className="section-label">O que fazemos</span>
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Do planejamento à execução, cuidamos de cada detalhe para que seu evento seja exatamente como você sempre sonhou.
        </p>
      </div>

      <div className="servicos__grid">
        {SERVICOS.map((s, i) => (
          <div key={i} className="servico-card">
            <div
              className="servico-card__bg"
              style={{ backgroundImage: `url(${s.bg})` }}
            />
            <div className="servico-card__overlay" />
            <div className="servico-card__content">
              <span className="servico-card__icon" aria-hidden="true">{s.icon}</span>
              <h3 className="servico-card__title">{s.title}</h3>
              <p className="servico-card__desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
