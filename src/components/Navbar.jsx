import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '../config'

const NAV_LINKS = [
  { label: 'Kenapa Buah', href: '#kenapa-buah' },
  { label: 'Paket', href: '#paket' },
  { label: 'Cara Pesan', href: '#cara-pesan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full bg-forest-600 flex items-center justify-center text-cream-50 text-lg font-display">
            🍊
          </span>
          <span className="font-display text-lg sm:text-xl font-semibold text-ink-800">
            D'<span className="text-forest-600">FRESH</span>FRUIT
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-700 hover:text-forest-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-soft"
          >
            Pesan via WhatsApp
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-forest-50 transition-colors"
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 bg-ink-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-cream-50 border-t border-forest-100 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-ink-700 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-forest-600 text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
