import useReveal from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    name: 'Bapak Andy',
    role: 'Sekretaris Perusahaan, PT Pegadaian',
    text: 'Untuk acara seminar 200 orang, mereka bisa handle dengan rapi. Tampilan buahnya juga estetik, cocok untuk dokumentasi acara.',
    avatar: '🧑🏻‍💼',
  },
  {
    name: 'Bapak Budi',
    role: 'Koordinator, Kementerian Koperasi dan UMKM',
    text: 'Tim kami jadi lebih semangat saat meeting karena ada buah segar. Pengiriman selalu tepat waktu dan rasanya benar-benar segar.',
    avatar: '👨🏻‍💼',
  },
  {
    name: 'Kak Dimas',
    role: 'General Affair, PT Mitra Sejahtera',
    text: 'Proses order gampang banget, tinggal chat WhatsApp langsung dibantu pilih paket sesuai budget dan jumlah tamu.',
    avatar: '🧑🏽‍💼',
  },
  {
    name: 'Ibu Tita',
    role: 'General Affair, ICDX',
    text: 'Invoice perusahaan tersedia, jadi mudah untuk reimbursement. Kualitas buah konsisten di setiap pemesanan.',
    avatar: '👩🏻‍💼',
  },
  {
    name: 'Ibu Nia',
    role: 'GM Operasional, LPSK',
    text: 'Variasi buahnya selalu fresh dan tim sangat responsif di WhatsApp.',
    avatar: '👩🏼‍💼',
  },
]

export default function Testimonials() {
  const [ref, visible] = useReveal()

  return (
    <section id="testimoni" className="bg-cream-100 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-citrus-600 font-semibold text-sm tracking-wide uppercase">
            Kata Mereka
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
            Dipercaya tim kantor di seluruh Jakarta
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-7 shadow-soft border border-forest-50 hover:shadow-card transition-shadow"
            >
              <div className="flex gap-0.5 text-citrus-500 mb-4" aria-label="Rating 5 dari 5 bintang">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-ink-700 leading-relaxed text-[15px]">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-forest-50 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
