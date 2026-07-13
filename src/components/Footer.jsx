import { BUSINESS, getWhatsAppLink } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-900 text-cream-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-forest-600 flex items-center justify-center text-lg">
                🍊
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Fresh & Healthy Snack
              </span>
            </div>
            <p className="text-cream-100/70 text-sm leading-relaxed max-w-sm">
              Menyediakan paket buah segar premium untuk kebutuhan meeting,
              seminar, training, dan acara perusahaan Anda. Sehat, praktis,
              dan dapat dipercaya.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Kontak
            </p>
            <ul className="space-y-3 text-sm text-cream-100/70">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-citrus-300 transition-colors"
                >
                  WhatsApp: +{BUSINESS.whatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-citrus-300 transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-citrus-300 transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Alamat
            </p>
            <p className="text-sm text-cream-100/70 leading-relaxed">
              {BUSINESS.address}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream-100/50">
            © {year} Fresh & Healthy Snack. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-cream-100/50">
            Dibuat dengan 🍓 untuk acara kantor yang lebih sehat.
          </p>
        </div>
      </div>
    </footer>
  )
}
