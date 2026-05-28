import Ornament from '../../../components/Ornament'
import ctaBannerImg from '../../../assets/images/cta-banner.jpg'

export default function CtaBanner() {
  return (
    <div className="cta-banner">
      <div
        className="cta-banner__bg"
        style={{ backgroundImage: `url(${ctaBannerImg})` }}
      />
      <div className="cta-banner__overlay" />
      <div className="cta-banner__content">
        <Ornament center />
        <h2 className="cta-banner__title">
          Pronto para planejar o evento dos seus sonhos?
        </h2>
        <p className="cta-banner__text">
          Entre em contato e dê o primeiro passo para uma celebração inesquecível. Estamos aqui para transformar cada detalhe em mágica.
        </p>
        <a href="#contato" className="btn btn-primary">Fale Conosco Agora</a>
      </div>
    </div>
  )
}
