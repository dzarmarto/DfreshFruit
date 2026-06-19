import useReveal from '../hooks/useReveal'
import { getWhatsAppLink } from '../config'

const STEPS = [
  {
    number: '01',
    title: 'Hubungi WhatsApp',
    desc: 'Klik tombol pesan, tim kami akan merespons dalam hitungan menit.',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Pilih Paket',
    desc: 'Sesuaikan jumlah peserta & jenis acara dengan paket yang tersedia.',
    icon: '🧺',
  },
  {
    number: '03',
    title: 'Tentukan Jadwal',
    desc: 'Beri tahu tanggal, jam, dan lokasi pengiriman acara Anda.',
    icon: '🗓️',
  },
  {
    number: '04',
    title: 'Buah Siap Diantar',
    desc: 'Tim kami antar tepat waktu, segar, dan siap disajikan.',
    icon: '🚚',
  },
]

export default function HowToOrder() {
  const [ref, visible] = useReveal()

  return (
    <section id="cara-pesan" className="bg-forest-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-forest-600 font-semibold text-sm tracking-wide uppercase">
            Mudah & Cepat
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
            Cara pemesanan dalam 4 langkah
          </h2>
        </div>

        <div
          ref={ref}
          className={`relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-forest-200" />

          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-card flex items-center justify-center text-3xl border-4 border-forest-50">
                {step.icon}
              </div>
              <span className="mt-4 font-display text-sm font-bold text-citrus-500 tracking-widest">
                {step.number}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed max-w-[220px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-semibold text-base px-8 py-4 rounded-full shadow-card transition-all hover:-translate-y-0.5"
          >
            Mulai Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
