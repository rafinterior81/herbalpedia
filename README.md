# HerbalKita Herbalpedia

HerbalKita adalah platform edukasi digital modern yang fokus pada pengenalan tanaman obat tradisional Indonesia, pengobatan Nabawi (Prophetic Medicine), dan tips kesehatan alami. Aplikasi ini dirancang untuk memudahkan masyarakat dalam mencari informasi khasiat tanaman di sekitar mereka dan cara pengolahannya secara praktis.

## 🌟 Fitur Utama

-   **Herbalpedia**: Direktori ribuan tanaman obat dengan filter kategori (Rimpang, Daun, Akar, dll).
-   **Informasi Detail**: Mencakup Nama Ilmiah, Manfaat Kesehatan, Cara Penyajian, dan Tips Praktis.
-   **Tibbun Nabawi**: Halaman khusus yang didedikasikan untuk edukasi pengobatan sesuai sunnah (Habbatussauda, Madu, dll).
-   **Blog Kesehatan**: Artikel dan tips harian seputar gaya hidup sehat alami.
-   **Dashboard Admin**: Panel manajemen konten bagi pengelola aplikasi untuk menambah/mengubah data tanaman dan artikel.
-   **Desain Responsif**: Antarmuka bersih dengan tema warna hijau herbal yang menenangkan, optimal di perangkat mobile maupun desktop.

## 🚀 Teknologi

-   **Frontend**: Next.js 14 (React)
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **State Management**: React Hooks (Native)
-   **Type Safety**: TypeScript

## 🛠️ Persyaratan Sistem

-   Node.js 18.x atau versi terbaru
-   NPM atau Yarn

## 📦 Instalasi

1.  **Clone atau Unduh Proyek**:
    Dapatkan source code aplikasi ini di perangkat lokal Anda.

2.  **Instal Dependensi**:
    Buka terminal di folder proyek dan jalankan:
    `npm install`

3.  **Jalankan Aplikasi (Development)**:
    `npm run dev`

4.  **Akses Aplikasi**:
    Buka browser Anda dan akses `http://localhost:3000`.

## 📂 Struktur Proyek

-   `app/`: Routing utama aplikasi (Next.js App Router).
    -   `admin/`: Panel kendali admin.
    -   `herbalpedia/`: Daftar tanaman dan detail tanaman (dynamic route `[id]`).
    -   `tibbun-nabawi/`: Halaman pengobatan sunnah.
    -   `artikel/`: Halaman blog kesehatan.
-   `components/`: Komponen UI reusable seperti Navbar, Footer, dan Cards.
-   `lib/`: Berisi data statis dan definisi tipe data (TypeScript interfaces).
-   `public/`: Asset statis (gambar, favicon).

## 📝 Catatan Penting

-   **Data**: Saat ini data bersifat statis yang tersimpan di `lib/data.ts`. Untuk pengembangan produksi, disarankan menghubungkan aplikasi dengan database seperti MongoDB atau PostgreSQL melalui Prisma ORM.
-   **Keamanan**: Halaman Admin saat ini dapat diakses langsung untuk keperluan demo. Pastikan mengimplementasikan NextAuth.js atau Clerk untuk sistem autentikasi di lingkungan produksi.

## 🤝 Kontribusi

Aplikasi ini dikembangkan untuk tujuan edukasi. Masukan dan saran sangat kami hargai untuk perkembangan pengobatan herbal di Indonesia.

---
Dibuat dengan ❤️ untuk Kesehatan Indonesia yang Lebih Alami.
