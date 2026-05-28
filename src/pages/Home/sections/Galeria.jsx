import Ornament from '../../../components/Ornament'
import { GALERIA } from '../../../data/galeria'

export default function Galeria() {
  return (
    <section id="galeria" className="galeria">
      <Ornament center />
      <span className="section-label">Nosso Portfólio</span>
      <h2 className="section-title">Momentos que Eternizamos</h2>
      <p className="section-subtitle" style={{ maxWidth: 540, margin: '0 auto' }}>
        Cada imagem carrega uma história, uma emoção, um momento que se tornou inesquecível.
      </p>
      <div className="galeria__grid">
        {GALERIA.map((img, i) => (
          <div
            key={i}
            className={`galeria__item${img.large ? ' galeria__item--large' : ''}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="galeria__item__overlay" aria-hidden="true">
              <span className="galeria__item__plus">+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
