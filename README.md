# Kirana Ayu Bridal — Website Rias Pengantin

Website satu halaman (single page) untuk usaha jasa rias pengantin, dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework, tanpa proses build).

## Struktur Folder

```
kirana-ayu-bridal/
├── index.html          Halaman utama (semua konten & section)
├── css/
│   └── style.css        Semua styling & palet warna
├── js/
│   └── script.js         Interaksi (menu mobile, animasi scroll, form booking ke WhatsApp)
├── assets/
│   └── images/            8 foto galeri hasil rias
└── README.md
```

## Cara Membuka

Cukup buka file `index.html` langsung dua kali klik di browser (Chrome/Firefox/Edge). Tidak perlu instalasi apa pun.

Jika ingin dijalankan lewat local server (opsional, untuk menghindari isu file lokal di beberapa browser):

```bash
cd kirana-ayu-bridal
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000` di browser.

## Bagian yang Perlu Diganti Sebelum Dipakai Live

| Yang diganti | Lokasi file | Keterangan |
|---|---|---|
| Nomor WhatsApp | `js/script.js` → variabel `WA_NUMBER` | Dipakai form booking, format `62812xxxxxxx` tanpa tanda `+` |
| Nomor WhatsApp (tombol melayang) | `index.html` → cari `wa.me/6281234567890` di bagian bawah `<body>` | Ganti dengan nomor yang sama seperti di atas |
| Email kontak | `index.html` → bagian `#booking`, `hello@kiranaayubridal.id` | |
| Nomor telepon di section booking | `index.html` → bagian `#booking`, `+62 8xx-xxxx-xxxx` | |
| Harga & isi paket | `index.html` → bagian `#paket` (3 kartu: Akad Sederhana, Akad & Resepsi, Prewedding + Adat) | |
| Nama usaha | Cari & ganti teks `Kirana Ayu Bridal` di seluruh `index.html` (logo, judul tab, footer) | Nama ini masih usulan, silakan ganti sesuai nama usaha Anda |
| Alamat & peta lokasi | `index.html` → bagian `#lokasi`, iframe Google Maps & teks alamat | Saat ini pakai alamat Jl. Kedung Baruk No.140, Surabaya |
| Foto galeri | `assets/images/` | Ganti/tambah file `gambar1.jpg` s.d. `gambar8.jpg`, lalu sesuaikan caption di `index.html` bagian `#galeri` |
| Jam operasional | `index.html` → bagian `#lokasi` | |

## Palet Warna (dari swatch yang Anda kirim)

Semua warna diatur lewat CSS variable di awal `css/style.css`, jadi ganti di satu tempat akan otomatis berubah di seluruh halaman:

```css
--plum:#883f61;        /* warna utama gelap — header dark section, judul */
--berry:#b15269;        /* warna utama — aksen judul & tombol outline */
--peach:#efbe8d;        /* aksen hangat — border, ikon */
--peach-light:#f6dcc0;  /* aksen hangat lebih terang */
--coral:#fc7f80;        /* aksen sorot — badge "Terpopuler", bullet paket */
--rose:#e96d70;         /* aksen sekunder */
--navy:#0f243d;         /* warna gelap — background footer */
--ivory:#fdf6f1;        /* background utama */
--ivory-warm:#fbe8db;   /* background section selang-seling */
```

## Fitur Halaman

- **Navigasi** responsif dengan menu mobile (hamburger)
- **Hero** — judul, deskripsi singkat, dua tombol aksi
- **Tentang** — 3 poin kepercayaan (pengalaman, jumlah pengantin, kualitas produk)
- **Galeri** — grid 8 foto hasil rias dengan efek hover & caption
- **Paket & Harga** — 3 kartu paket, satu ditandai "Terpopuler"
- **Testimoni** — 3 ulasan pelanggan
- **Form Booking** — mengisi form otomatis membuka WhatsApp dengan pesan yang sudah terisi
- **Lokasi** — peta Google Maps tertanam + alamat
- **Tombol WhatsApp melayang** — selalu terlihat di pojok kanan bawah
- Animasi *reveal* saat scroll, dan menghormati pengaturan *reduced motion* di perangkat pengguna

## Kompatibilitas

Sudah responsif untuk mobile, tablet, dan desktop. Font diambil dari Google Fonts (butuh koneksi internet saat halaman dibuka) — jika ingin dipakai offline sepenuhnya, unduh font tersebut dan ubah bagian `<link>` font di `index.html`.

## Hosting / Publikasi

File ini adalah website statis, jadi bisa langsung diunggah ke layanan seperti:
- Netlify / Vercel (drag & drop folder)
- GitHub Pages
- Hosting shared biasa (upload lewat FTP/cPanel)

Cukup unggah seluruh isi folder `kirana-ayu-bridal/` (jangan hanya `index.html` saja, karena CSS/JS/gambar ada di folder terpisah).
