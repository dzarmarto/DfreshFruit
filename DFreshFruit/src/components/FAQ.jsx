import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const FAQS = [
  {
    q: 'Apakah buah dikirim di hari yang sama (same-day)?',
    a: 'Untuk pemesanan sebelum jam 12 siang, kami bisa mengusahakan pengiriman di hari yang sama tergantung ketersediaan dan lokasi. Untuk acara penting, kami sarankan pesan minimal H-1 agar persiapan lebih optimal.',
  },
  {
    q: 'Apakah bisa untuk acara besar seperti seminar atau corporate event?',
    a: 'Tentu. Kami melayani acara dari skala kecil (10 orang) hingga ratusan peserta, termasuk seminar, training, dan corporate gathering. Tim kami akan bantu rencanakan menu dan jumlah yang sesuai.',
  },
  {
    q: 'Apakah tersedia invoice resmi untuk perusahaan?',
    a: 'Ya, kami menyediakan invoice dan kuitansi resmi yang bisa digunakan untuk keperluan reimbursement atau pembukuan perusahaan Anda.',
  },
  {
    q: 'Bagaimana cara melakukan pemesanan?',
    a: 'Pemesanan dilakukan melalui WhatsApp. Cukup klik tombol "Pesan via WhatsApp" di halaman ini, lalu sebutkan jumlah peserta, tanggal acara, dan paket yang diinginkan.',
  },
  {
    q: 'Berapa minimal pemesanan?',
    a: 'Minimal pemesanan kami adalah Paket Meeting untuk 10 orang. Untuk kebutuhan personal atau jumlah lebih kecil, silakan tanyakan ketersediaan melalui WhatsApp.',
  },
  {
    q: 'Apakah bisa request menu buah tertentu?',
    a: 'Bisa. Kami menyesuaikan pilihan buah dengan musim dan preferensi Anda, termasuk jika ada anggota tim dengan alergi atau pantangan tertentu.',
  },
  {
    q: 'Apakah harga sudah termasuk ongkos kirim?',
    a: 'Untuk wilayah Jabodetabek, sebagian besar paket sudah termasuk ongkos kirim. Untuk lokasi di luar area tersebut, akan ada penyesuaian biaya yang akan diinformasikan saat konfirmasi pesanan.',
  },
  {
    q: 'Bagaimana sistem pembayaran yang tersedia?',
    a: 'Kami menerima pembayaran melalui transfer bank, QRIS, dan untuk perusahaan dengan sistem PO bisa menggunakan term pembayaran sesuai kesepakatan.',
  },
  {
    q: 'Apakah kemasan buah aman dan higienis?',
    a: 'Semua buah dicuci, dipotong, dan dikemas menggunakan standar higienitas tinggi dengan kemasan food-grade yang aman dan tetap menjaga kesegaran buah.',
  },
  {
    q: 'Bisa pesan rutin untuk meeting mingguan kantor?',
    a: 'Sangat bisa. Banyak pelanggan kami berlangganan rutin mingguan atau bulanan untuk kebutuhan meeting kantor. Kami bisa atur jadwal pengiriman berkala sesuai kebutuhan Anda.',
  },
  {
    q: 'Berapa lama sebelum acara sebaiknya saya memesan?',
    a: 'Untuk hasil terbaik, kami sarankan memesan minimal 1-2 hari sebelum acara, terutama untuk paket besar seperti corporate event agar persiapan lebih matang.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useReveal()

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-forest-600 font-semibold text-sm tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
            Pertanyaan yang sering ditanyakan
          </h2>
        </div>

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="border-b border-forest-100">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-ink-800 text-base sm:text-lg group-hover:text-forest-600 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center text-forest-700 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-ink-500 leading-relaxed pr-10">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
