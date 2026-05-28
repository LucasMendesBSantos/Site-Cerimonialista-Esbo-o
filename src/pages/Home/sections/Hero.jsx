import heroImg from '../../../assets/images/hero.jpg'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__tag">Cerimonial &amp; Assessoria de Eventos</span>
        <h1 className="hero__title">
          Transformamos seus sonhos<br />
          em <em>memórias eternas</em>
        </h1>
        <p className="hero__subtitle">
          Cada momento merece ser vivido com intensidade e elegância.<br />
          Deixe que cuidemos de cada detalhe do seu evento especial.
        </p>
        <div className="hero__buttons">
          <a href="#contato" className="btn btn-primary">Agende uma Conversa</a>
          <a href="#servicos" className="btn btn-outline">Nossos Serviços</a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Rolar</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
