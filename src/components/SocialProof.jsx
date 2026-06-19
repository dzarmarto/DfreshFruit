import useReveal from '../hooks/useReveal'

const STATS = [
  { value: '1.000+', label: 'Box Terkirim' },
  { value: '100+', label: 'Acara Perusahaan' },
  { value: '95%', label: 'Pelanggan Repeat Order' },
]

const LOGO_PLACEHOLDERS = [
  'PT Mitra Sejahtera',
  'Global Tech Indo',
  'Nusantara Finance',
  'Bintang Konsultan',
  'Cipta Karya Group',
  'Maju Bersama Corp',
]

export default function SocialProof() {
  const [ref, visible] = useReveal()

  return (
    <section className="bg-white py-16 sm:py-20 border-y border-forest-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl sm:text-5xl font-semibold text-forest-600">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-ink-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-center text-xs font-semibold tracking-widest text-ink-400 uppercase mb-7">
            Dipercaya oleh tim dari berbagai perusahaan
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {LOGO_PLACEHOLDERS.map((name) => (
              <div
                key={name}
                className="text-ink-400/70 font-display font-semibold text-base sm:text-lg select-none grayscale opacity-70 hover:opacity-100 transition-opacity"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
