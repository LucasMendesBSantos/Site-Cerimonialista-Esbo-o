import Ornament from '../../../components/Ornament'
import { DEPOIMENTOS } from '../../../data/depoimentos'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <Ornament center />
      <span className="section-label">Depoimentos</span>
      <h2 className="section-title">O que dizem nossos clientes</h2>
      <div className="depoimentos__grid">
        {DEPOIMENTOS.map((d, i) => (
          <div key={i} className="depoimento-card">
            <span className="depoimento-card__quote" aria-hidden="true">"</span>
            <p className="depoimento-card__text">{d.text}</p>
            <div className="depoimento-card__stars" aria-label="5 estrelas">{d.stars}</div>
            <div className="depoimento-card__name">{d.name}</div>
            <div className="depoimento-card__event">{d.event}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
