// Konfigurasi terpusat — ubah di sini untuk update seluruh website

export const BUSINESS = {
  name: "D'FRESHFRUIT",
  tagline: 'Buah segar pilihan, langsung ke tanganmu',
  whatsappNumber: '6282130252141',
  instagram: 'https://instagram.com/dfreshfruitjkt',
  email: 'dfreshmartjkt@gmail.com',
  address: 'Jl. Trikora No. 14 RT 05/09, Kel. Gedong, Kec. Pasar Rebo, Jakarta Timur',
}

/**
 * Membuat link WhatsApp dengan pesan pre-filled.
 * @param {string} message - Pesan yang akan otomatis terisi.
 */
export function getWhatsAppLink(message = "Halo, saya ingin pesan paket buah dari D'FRESHFRUIT.") {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encoded}`
}
