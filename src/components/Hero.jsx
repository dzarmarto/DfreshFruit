import { getWhatsAppLink } from '../config'

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-cream-100 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Ambient decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-forest-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-citrus-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-forest-200">
            🍇 Buah import & lokal segar pilihan terbaik
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-ink-900 text-balance">
            Ubah Snack Rapat Menjadi{' '}
            <span className="relative inline-block text-forest-600">
              Lebih Sehat
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 2 150 2 298 9"
                  stroke="#FF7A30"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg text-ink-500 leading-relaxed">
             Paket buah segar untuk meeting, seminar, dan acara kantor.
            Praktis, sehat, dan disukai semua peserta.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink("Halo, saya ingin pesan paket buah dari D'FRESHFRUIT.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-citrus-500 hover:bg-citrus-600 text-white font-semibold text-base px-7 py-4 rounded-full shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <WhatsAppIcon />
              Pesan via WhatsApp
            </a>
            <a
              href="#paket"
              className="inline-flex items-center justify-center gap-2 bg-white border border-forest-200 hover:border-forest-400 text-forest-700 font-semibold text-base px-7 py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              Lihat Paket
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {['🧑‍💼', '👩‍💼', '🧑‍💻', '👨‍💼'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-forest-100 border-2 border-cream-100 flex items-center justify-center text-lg"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-500 leading-snug">
              <span className="font-bold text-ink-800">1.000+ paket</span> buah
              segar telah dinikmati pelanggan kami
            </p>
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-4xl overflow-hidden shadow-card-hover bg-forest-100">
            <img
              src="https://i.ibb.co/60CKGNVQ/dreamina-2025-11-26-7071-Create-a-modern-homepage-hero-image-kee.jpg"
              alt="Paket buah segar premium disusun rapi untuk acara meeting kantor"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Floating card 1: meeting context */}
          <div className="hidden sm:flex absolute -bottom-6 -left-8 w-48 bg-white rounded-3xl shadow-card p-3 items-center gap-3 animate-float">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=300&auto=format&fit=crop"
              alt="Tim kantor menikmati buah segar saat meeting"
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-ink-800 leading-tight">
                Disukai saat meeting
              </p>
              <p className="text-[11px] text-ink-400">Fokus tetap terjaga</p>
            </div>
          </div>

          {/* Floating badge: stat */}
          <div className="hidden sm:flex absolute -top-5 -right-5 bg-forest-700 text-white rounded-3xl shadow-card px-5 py-4 flex-col items-center">
            <span className="font-display text-2xl font-semibold">95%</span>
            <span className="text-[11px] text-forest-100 mt-0.5">Repeat order</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.57 3.74 1.55 5.27L2 22l4.97-1.63a9.86 9.86 0 0 0 5.07 1.4h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.06c-.24.68-1.42 1.32-1.95 1.4-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.78-4.18-4.92-4.37-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36s.38 0 .55.01c.18.01.42-.07.65.5.24.58.81 1.99.88 2.13.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.28.29-.12.57.16.28.74 1.22 1.6 1.98 1.1.98 2.03 1.28 2.31 1.43.28.14.45.12.62-.05.17-.17.71-.83.9-1.11.19-.28.38-.24.64-.14.26.1 1.64.78 1.92.92.28.14.47.21.54.33.07.12.07.69-.17 1.37z" />
    </svg>
  )
}
