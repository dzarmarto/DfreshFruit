import useReveal from '../hooks/useReveal'

const TRADITIONAL = [
  { icon: '🍩', text: 'Gorengan berminyak' },
  { icon: '🍰', text: 'Kue manis tinggi gula' },
  { icon: '😴', text: 'Cepat membuat ngantuk' },
  { icon: '📉', text: 'Kesan kurang profesional' },
]

const FRESH = [
  { icon: '🍓', text: 'Segar & dipotong matang' },
  { icon: '💊', text: 'Kaya vitamin & serat' },
  { icon: '⚡', text: 'Meningkatkan fokus peserta' },
  { icon: '✨', text: 'Tampilan lebih profesional' },
]

export default function WhyFruit() {
  const [ref, visible] = useReveal()

  return (
    <section id="kenapa-buah" className="bg-cream-100 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-citrus-600 font-semibold text-sm tracking-wide uppercase">
            Kenapa memilih buah?
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
            Snack rapat yang bikin tim tetap fokus, bukan ngantuk
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Traditional */}
          <div className="bg-white rounded-4xl p-8 sm:p-10 border border-ink-400/10">
            <p className="text-sm font-semibold text-ink-400 uppercase tracking-wide mb-6">
              Snack Rapat Tradisional
            </p>
            <ul className="space-y-4">
              {TRADITIONAL.map((item) => (
                <li key={item.text} className="flex items-center gap-4">
                  <span className="w-11 h-11 flex items-center justify-center rounded-2xl bg-ink-400/10 text-xl">
                    {item.icon}
                  </span>
                  <span className="text-ink-500 font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fresh & Healthy */}
          <div className="bg-forest-700 rounded-4xl p-8 sm:p-10 shadow-card-hover relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-forest-600 rounded-full opacity-50" />
            <p className="relative text-sm font-semibold text-citrus-300 uppercase tracking-wide mb-6">
              Fresh & Healthy Snack
            </p>
            <ul className="relative space-y-4">
              {FRESH.map((item) => (
                <li key={item.text} className="flex items-center gap-4">
                  <span className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/15 text-xl">
                    {item.icon}
                  </span>
                  <span className="text-white font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
