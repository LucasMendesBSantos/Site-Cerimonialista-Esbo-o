import Navbar        from '../../components/Navbar'
import Footer        from '../../components/Footer'
import WhatsAppFloat from '../../components/WhatsAppFloat'

import Hero         from './sections/Hero'
import Stats        from './sections/Stats'
import Sobre        from './sections/Sobre'
import Servicos     from './sections/Servicos'
import Diferenciais from './sections/Diferenciais'
import Galeria      from './sections/Galeria'
import Depoimentos  from './sections/Depoimentos'
import CtaBanner    from './sections/CtaBanner'
import Contato      from './sections/Contato'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Galeria />
      <Depoimentos />
      <CtaBanner />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
