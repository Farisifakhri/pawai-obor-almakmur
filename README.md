# 🏮 Pawai Obor Digital Al-Ma'mur

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-success?logo=vercel&logoColor=white)](https://pawai-obor-almakmur.vercel.app/)
[![Supabase](https://img.shields.io/badge/Database-Supabase-blueviolet?logo=supabase&logoColor=white)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sistem Penilaian Digital yang dirancang khusus untuk memodernisasi pengelolaan acara **Pawai Obor PRISMA Al-Ma'mur**. Proyek ini menggantikan sistem tabulasi manual menjadi sistem berbasis *cloud* yang *real-time*, akurat, dan transparan.

---

## 🚀 Fitur Utama

- **Real-Time Leaderboard**: Klasemen sementara yang diperbarui otomatis setiap 15 detik.
- **Kolektif Multi-Juri**: Sistem input terintegrasi untuk 3 juri di setiap pos (Total 12 juri per peserta).
- **Admin Dashboard (VAR)**: Fitur monitoring pusat dengan kemampuan koreksi data (Edit/Upsert).
- **Export to Excel**: Laporan otomatis dalam format .xlsx untuk arsip fisik dan akuntabilitas.
- **Responsive Design**: Tampilan mewah yang optimal di berbagai perangkat (HP & Desktop).

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Glassmorphism Design), JavaScript (ES6+).
- **Backend/Database**: [Supabase](https://supabase.com/) (PostgreSQL & GoTrue Auth).
- **Deployment**: [Vercel](https://vercel.com/).

---

## 📊 Sistem Penilaian (Mathematical Logic)

Sistem ini menggunakan algoritma rata-rata terdistribusi untuk memastikan keadilan bagi seluruh peserta:

$$\text{Final Score} = \frac{\sum_{i=1}^{Pos} (\sum_{j=1}^{Juri} \text{Skor}_{i,j})}{12}$$

Setiap kelompok (RT/RW) dinilai oleh 3 juri berbeda di 4 pos pengecekan yang berbeda, sehingga total terdapat 12 variabel nilai yang menentukan kemenangan.

---

## 🔑 Arsitektur Database

Proyek ini menggunakan relasi database PostgreSQL yang dioptimalkan melalui **SQL Views** untuk menghitung peringkat secara instan:

1. **Table `peserta`**: Menyimpan data Master Kelompok (RT/RW).
2. **Table `skor_pos`**: Menyimpan data transaksi nilai juri.
3. **View `leaderboard`**: Menghitung rata-rata secara otomatis di sisi server.

---

## 📸 Tampilan Aplikasi

| Halaman Leaderboard | Halaman Input Pos |
| :---: | :---: |
| ![Leaderboard](https://via.placeholder.com/400x250?text=Leaderboard+Live) | ![Input Pos](https://via.placeholder.com/400x250?text=Input+3+Juri) |

---

## 👷‍♂️ Kontribusi

Proyek ini dikembangkan oleh:

**Fakhri Alfarisi** *Mahasiswa Teknik Informatika, UIN Syarif Hidayatullah Jakarta* *Sekretaris Jenderal Prisma Al-Ma'mur*

---

© 2026 PRISMA Al-Ma'mur - Bumi Asri Kutabumi.