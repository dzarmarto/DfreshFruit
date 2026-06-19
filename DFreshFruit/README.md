# 🍊 Fresh & Healthy Snack — Landing Page

Landing page profesional untuk bisnis paket buah sehat yang menyasar kantor,
perusahaan, meeting, seminar, training, dan event korporat. Dibangun dengan
**React + Vite + Tailwind CSS**, dioptimalkan untuk konversi pemesanan via
WhatsApp.

## ✨ Fitur

- Desain modern, hangat, dan premium — kombinasi gaya *whitespace bersih*
  (Notion) dan *kartu produk emosional* (Rainbowly).
- Fully responsive, mobile-first.
- Smooth scroll & scroll-reveal animation (menghormati `prefers-reduced-motion`).
- Floating WhatsApp button.
- SEO-friendly (meta tags, Open Graph, structured data `LocalBusiness`).
- Komponen React modular & mudah dikustomisasi.
- Semua teks dalam Bahasa Indonesia, siap pakai.

## 📁 Struktur Folder

```
fresh-healthy-snack/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigasi + CTA WhatsApp
│   │   ├── Hero.jsx             # Hero section, headline utama
│   │   ├── SocialProof.jsx      # Statistik & logo perusahaan
│   │   ├── WhyFruit.jsx         # Perbandingan snack tradisional vs buah
│   │   ├── PackageCard.jsx      # Kartu paket (signature component)
│   │   ├── Packages.jsx         # Grid 4 paket produk
│   │   ├── HowToOrder.jsx       # 4 langkah cara pemesanan
│   │   ├── Testimonials.jsx     # 6 testimoni pelanggan
│   │   ├── FAQ.jsx              # Accordion FAQ (11 pertanyaan)
│   │   ├── FinalCTA.jsx         # CTA penutup
│   │   ├── Footer.jsx           # Footer dengan kontak & alamat
│   │   └── FloatingWhatsApp.jsx # Tombol WA mengambang
│   ├── hooks/
│   │   └── useReveal.js         # Hook scroll-reveal animation
│   ├── config.js                # ⚙️ Data bisnis terpusat (WA, IG, email, dll)
│   ├── App.jsx                  # Penyusun seluruh section
│   ├── main.jsx                 # Entry point React
│   └── index.css                # Tailwind + global styles
├── index.html                   # SEO meta tags & structured data
├── tailwind.config.js           # Tema warna & tipografi kustom
├── postcss.config.js
├── vite.config.js
├── vercel.json                  # Konfigurasi deploy Vercel
├── package.json
└── README.md
```

## 🎨 Branding

| Elemen | Nilai |
|---|---|
| Warna utama | Hijau forest `#1F6E43`, Putih `#FFFDFB`, Oranye `#FF7A30` |
| Font display | Fraunces (serif, untuk headline) |
| Font body | Inter (sans-serif, untuk teks & UI) |

## 🔧 Mengganti Konten

### 1. Nomor WhatsApp, Instagram, Email, Alamat
Edit semuanya di **satu file**: `src/config.js`

```js
export const BUSINESS = {
  whatsappNumber: '6281234567890', // ganti dengan nomor asli, format 62xxxxxxxxxx
  instagram: 'https://instagram.com/akun-anda',
  email: 'email@anda.com',
  address: 'Alamat lengkap bisnis Anda',
}
```

### 2. Foto Produk
Saat ini menggunakan placeholder dari Unsplash agar Anda bisa langsung
preview tampilan. **Ganti dengan foto produk asli** sebelum go-live:

- `src/components/Hero.jsx` — foto hero utama & 2 foto floating card.
- `src/components/Packages.jsx` — array `PACKAGES`, properti `image` pada
  setiap paket.

Cara ganti: letakkan file foto di `src/assets/`, lalu import dan gunakan,
contoh:
```jsx
import fotoPaket10 from '../assets/paket-10-orang.jpg'
// lalu gunakan: image: fotoPaket10
```

### 3. Harga & Detail Paket
Edit array `PACKAGES` di `src/components/Packages.jsx`.

### 4. Testimoni
Edit array `TESTIMONIALS` di `src/components/Testimonials.jsx`.

### 5. FAQ
Edit array `FAQS` di `src/components/FAQ.jsx`.

## 🚀 Cara Menjalankan Project (Development)

Pastikan **Node.js versi 18+** sudah terinstall.

```bash
# 1. Masuk ke folder project
cd fresh-healthy-snack

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser di `http://localhost:5173` — perubahan kode akan otomatis
ter-refresh (hot reload).

## 📦 Build untuk Production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`. Untuk preview hasil build secara
lokal:

```bash
npm run preview
```

## ☁️ Deploy ke Vercel

### Opsi A — Lewat Vercel CLI (tercepat)

```bash
npm install -g vercel
vercel login
vercel
```

Ikuti instruksi di terminal. Saat ditanya framework, Vercel akan otomatis
mendeteksi **Vite**. Untuk deploy ke production:

```bash
vercel --prod
```

### Opsi B — Lewat GitHub + Vercel Dashboard (direkomendasikan untuk update berkala)

1. Push project ini ke repository GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Fresh & Healthy Snack landing page"
   git branch -M main
   git remote add origin https://github.com/username/fresh-healthy-snack.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → **Add New Project**.
3. Pilih repository GitHub yang baru dibuat.
4. Vercel otomatis mendeteksi setting:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Klik **Deploy**. Setiap kali Anda `git push`, Vercel akan otomatis
   build & deploy ulang.

### Custom Domain

Setelah deploy, masuk ke **Project Settings → Domains** di dashboard
Vercel, lalu tambahkan domain Anda (misal `freshhealthysnack.id`) dan
ikuti instruksi DNS yang diberikan.

## 🖼️ Catatan Tentang Gambar

Semua foto saat ini adalah placeholder dari Unsplash (gratis, royalty-free)
agar desain bisa langsung dilihat dan dites. **Sangat disarankan** mengganti
dengan foto produk asli sebelum website live ke publik, karena foto asli
akan jauh meningkatkan kepercayaan calon pelanggan.

## 📄 Lisensi

Project ini dibuat khusus untuk bisnis Fresh & Healthy Snack. Bebas
dimodifikasi sesuai kebutuhan.
