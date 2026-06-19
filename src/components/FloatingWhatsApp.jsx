import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '../config'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-card-hover transition-all duration-300 hover:scale-110 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg viewBox="0 0 24 24" className="relative w-7 h-7 sm:w-8 sm:h-8 fill-white" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.57 3.74 1.55 5.27L2 22l4.97-1.63a9.86 9.86 0 0 0 5.07 1.4h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.06c-.24.68-1.42 1.32-1.95 1.4-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.78-4.18-4.92-4.37-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36s.38 0 .55.01c.18.01.42-.07.65.5.24.58.81 1.99.88 2.13.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.28.29-.12.57.16.28.74 1.22 1.6 1.98 1.1.98 2.03 1.28 2.31 1.43.28.14.45.12.62-.05.17-.17.71-.83.9-1.11.19-.28.38-.24.64-.14.26.1 1.64.78 1.92.92.28.14.47.21.54.33.07.12.07.69-.17 1.37z" />
      </svg>
    </a>
  )
}
