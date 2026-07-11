import useReveal from '../hooks/useReveal'
import PackageCard from './PackageCard'

const PACKAGES = [
  {
    name: 'Paket 2 Buah',
    badge: '1 Import + 1 Lokal',
    description: 'Kombinasi sempurna buah import premium dan buah lokal segar terbaik pilihan kami.',
    image: 'https://i.ibb.co/tM03wkN6/dreamina-2026-06-18-2296-Enhance-the-product-photo-with-clean-and.png',
    imageAlt: 'Paket 2 buah segar terdiri dari 1 buah import dan 1 buah lokal',
    features: [
      '1 buah import pilihan',
      '1 buah lokal terbaik',
      'Dikemas rapi & higienis',
    ],
  },
  {
    name: 'Paket 3 Buah',
    badge: '2 Import + 1 Lokal',
    description: 'Paket favorit kami — lebih banyak pilihan buah import premium dalam satu paket.',
    price: 'Tanya Harga',
    image: 'https://i.ibb.co/mF1XhvG5/dreamina-2025-11-26-9649-Create-a-premium-studio-look-smooth-lig.jpg',
    imageAlt: 'Paket 3 buah terdiri dari 2 buah import dan 1 buah lokal pilihan',
    featured: true,
    features: [
      '2 buah import pilihan premium',
      '1 buah lokal terbaik',
      'Kemasan premium & eksklusif',
    ],
  },
  {
    name: 'Paket 2 Buah Import',
    badge: 'All Import',
    description: 'Untuk Anda yang ingin menikmati dua jenis buah import pilihan sekaligus.',
    price: 'Tanya Harga',
    image: 'https://i.ibb.co/sJmz8q3h/dreamina-2025-11-26-6863-Create-a-premium-studio-look-smooth-lig.jpg',
    imageAlt: 'Paket 2 buah import premium pilihan segar berkualitas tinggi',
    features: [
      '2 buah import premium pilihan',
      'Stok berganti sesuai musim terbaik',
      'Kemasan segar & higienis',
    ],
  },
  {
    name: 'Paket Buah Potong',
    badge: 'Siap Makan',
    description: 'Buah segar sudah dipotong, dibersihkan, dan siap disantap langsung.',
    price: 'Tanya Harga',
    image: 'https://i.ibb.co/3ygjVq70/dreamina-2026-06-18-5134-Enhance-the-product-photo-with-clean-and.png',
    imageAlt: 'Paket buah potong segar siap makan dalam kemasan higienis',
    features: [
      'Mix buah lokal & import dipotong',
      'Dikemas dalam wadah food-grade',
      'Praktis langsung dimakan',
    ],
  },
]

export default function Packages() {
  const [ref, visible] = useReveal()

  return (
    <section id="paket" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-forest-600 font-semibold text-sm tracking-wide uppercase">
            Pilih Paket
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
            Paket buah segar per satuan
          </h2>
          <p className="mt-4 text-ink-500 text-lg">
            Harga menyesuaikan jenis buah & musim. Chat kami via WhatsApp untuk
            info harga dan ketersediaan hari ini.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} featured={pkg.featured} />
          ))}
        </div>
      </div>
    </section>
  )
}
