import Ornament from '../../../components/Ornament'
import { DIFERENCIAIS } from '../../../data/diferenciais'

export default function Diferenciais() {
  return (
    <section className="diferenciais">
      <Ornament center />
      <span className="section-label">Por que nos escolher</span>
      <h2 className="section-title">Nossos Diferenciais</h2>
      <p className="section-subtitle" style={{ maxWidth: 560, margin: '0 auto' }}>
        O que nos torna especiais vai além da organização — é a dedicação genuína a cada evento e a cada cliente.
      </p>
      <div className="diferenciais__grid">
        {DIFERENCIAIS.map((d, i) => (
          <div key={i} className="diferencial-item">
            <span className="diferencial-item__icon" aria-hidden="true">{d.icon}</span>
            <h3 className="diferencial-item__title">{d.title}</h3>
            <p className="diferencial-item__text">{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
