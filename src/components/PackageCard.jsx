import { getWhatsAppLink } from '../config'

export default function PackageCard({ pkg, featured = false }) {
  return (
    <div
      className={`group relative rounded-4xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
        featured
          ? 'bg-forest-700 shadow-card-hover ring-2 ring-citrus-400'
          : 'bg-white shadow-card hover:shadow-card-hover border border-forest-50'
      }`}
    >
      {featured && (
        <div className="absolute top-5 right-5 z-10 bg-citrus-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          Paling Populer
        </div>
      )}

      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Badge komposisi */}
        {pkg.badge && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-forest-700 text-xs font-bold px-3 py-1.5 rounded-full">
            {pkg.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3
          className={`font-display text-xl font-semibold ${
            featured ? 'text-white' : 'text-ink-900'
          }`}
        >
          {pkg.name}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            featured ? 'text-forest-100' : 'text-ink-500'
          }`}
        >
          {pkg.description}
        </p>

        <ul className="mt-4 space-y-2">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2 text-sm ${
                featured ? 'text-forest-50' : 'text-ink-700'
              }`}
            >
              <span className={featured ? 'text-citrus-300' : 'text-forest-500'}>✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p
            className={`text-xs ${
              featured ? 'text-forest-200' : 'text-ink-400'
            }`}
          >
            Harga
          </p>
          <p
            className={`font-display text-xl font-semibold ${
              featured ? 'text-citrus-300' : 'text-citrus-600'
            }`}
          >
            {pkg.price}
          </p>
        </div>

        <a
          href={getWhatsAppLink(`Halo, saya tertarik dengan ${pkg.name} (${pkg.badge}). Bisa info harga dan ketersediaannya?`)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3.5 rounded-full transition-colors ${
            featured
              ? 'bg-citrus-500 hover:bg-citrus-600 text-white'
              : 'bg-forest-50 hover:bg-forest-600 hover:text-white text-forest-700'
          }`}
        >
          Tanya via WhatsApp
        </a>
      </div>
    </div>
  )
}
