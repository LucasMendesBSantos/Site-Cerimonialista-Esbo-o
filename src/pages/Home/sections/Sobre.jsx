import Ornament from '../../../components/Ornament'
import sobreImg from '../../../assets/images/sobre.jpg'

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__grid">
        <div className="sobre__image-wrap">
          <img
            src={sobreImg}
            alt="Cerimonialista em ação"
            className="sobre__image"
          />
          <div className="sobre__image-frame" aria-hidden="true" />
          <div className="sobre__image-accent" aria-hidden="true" />
        </div>

        <div className="sobre__content">
          <Ornament />
          <span className="section-label">Quem Somos</span>
          <h2 className="section-title">Uma história de paixão por celebrar momentos</h2>
          <p className="sobre__text">
            Somos uma empresa de cerimonial e assessoria apaixonada por transformar datas especiais em experiências únicas e inesquecíveis. Acreditamos que cada celebração conta uma história — e queremos que a sua seja contada da forma mais bela possível.
          </p>
          <p className="sobre__text">
            Com anos de experiência no mercado de eventos, nossa equipe de especialistas está pronta para planejar, organizar e executar o seu evento dos sonhos, do primeiro ao último detalhe. Trabalhamos com dedicação, carinho e profissionalismo para que você possa viver cada momento plenamente.
          </p>
          <p className="sobre__text">
            Nosso compromisso vai além da organização: criamos conexões verdadeiras com nossos clientes, entendemos seus desejos e os traduzimos em eventos que superam expectativas.
          </p>
          <span className="sobre__signature">EsboçoCerimonialistas</span>
        </div>
      </div>
    </section>
  )
}
