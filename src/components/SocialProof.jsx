import useReveal from '../hooks/useReveal'

const STATS = [
  { value: '1.000+', label: 'Box Terkirim' },
  { value: '100+', label: 'Acara Perusahaan' },
  { value: '95%', label: 'Pelanggan Repeat Order' },
]

const LOGOS = [
  {
    name: 'Kementerian Koperasi RI',
    src: '/Logo Kementrian Koperasi.webp',
  },
  {
    name: 'LPSK',
    src: '/LPSK.png',
  },
  {
    name: 'ICDX',
    src: '/logo-icdx-2.png',
  },
  {
    name: 'Pegadaian',
    src: '/Pegadaian_new_logo.png',
  },
  {
    name: 'PT Mitra Sejahtera',
    src: '/logo mitra sejahtera.jpeg',
  },
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
          <p className="text-center text-xs font-semibold tracking-widest text-ink-400 uppercase mb-8">
            Dipercaya oleh tim dari berbagai perusahaan
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 sm:h-12 w-auto object-contain max-w-[120px] sm:max-w-[140px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
