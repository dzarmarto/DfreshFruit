import useReveal from '../hooks/useReveal'
import { getWhatsAppLink } from '../config'

export default function FinalCTA() {
  const [ref, visible] = useReveal()

  return (
    <section className="relative bg-forest-700 py-20 sm:py-28 overflow-hidden">
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-forest-600 rounded-full opacity-50 blur-2xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-citrus-500/20 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto px-5 sm:px-8 text-center reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white text-balance leading-tight">
          Siap Pesan Buah Segar Hari Ini?
        </h2>
        <p className="mt-5 text-forest-100 text-lg max-w-xl mx-auto">
          Chat kami sekarang — pilih paket, konfirmasi harga, dan buah segar
          siap kami antarkan ke lokasi Anda.
        </p>

        <a
          href={getWhatsAppLink("Halo D'FRESHFRUIT, saya ingin pesan paket buah segar hari ini.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-3 bg-citrus-500 hover:bg-citrus-600 text-white font-bold text-lg px-9 py-5 rounded-full shadow-card-hover transition-all hover:-translate-y-1 animate-pulse-soft"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.57 3.74 1.55 5.27L2 22l4.97-1.63a9.86 9.86 0 0 0 5.07 1.4h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.06c-.24.68-1.42 1.32-1.95 1.4-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.78-4.18-4.92-4.37-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36s.38 0 .55.01c.18.01.42-.07.65.5.24.58.81 1.99.88 2.13.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.28.29-.12.57.16.28.74 1.22 1.6 1.98 1.1.98 2.03 1.28 2.31 1.43.28.14.45.12.62-.05.17-.17.71-.83.9-1.11.19-.28.38-.24.64-.14.26.1 1.64.78 1.92.92.28.14.47.21.54.33.07.12.07.69-.17 1.37z" />
          </svg>
          Pesan Sekarang via WhatsApp
        </a>

        <p className="mt-5 text-sm text-forest-200">
          Respons cepat • Tanpa minimal pembayaran di awal • Gratis konsultasi paket
        </p>
      </div>
    </section>
  )
}
