import { WHATSAPP } from '../data/config'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
    >
      💬
    </a>
  )
}
