// Konfigurasi terpusat — ubah di sini untuk update seluruh website

export const BUSINESS = {
  name: "DFRESHFRUIT",
  tagline: 'Buah segar pilihan, langsung ke tanganmu',
  whatsappNumber: '082130252141', // Ganti dengan nomor WhatsApp asli (format: 62xxxxxxxxxx)
  instagram: 'https://instagram.com/dfreshfruit.id',
  email: 'hello@dfreshfruit.id',
  address: 'Jl. Kemang Raya No. 12, Jakarta Selatan, DKI Jakarta',
}

/**
 * Membuat link WhatsApp dengan pesan pre-filled.
 * @param {string} message - Pesan yang akan otomatis terisi.
 */
export function getWhatsAppLink(message = "Halo, saya ingin pesan paket buah dari D'FRESHFRUIT.") {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encoded}`
}
