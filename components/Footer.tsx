import { Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="text-primary-600" size={28} />
              <span className="font-bold text-lg text-primary-900">HerbalKita</span>
            </Link>
            <p className="text-gray-500 text-sm">
              Solusi edukasi herbal dan kesehatan alami terpercaya. Belajar mengenal khasiat alam untuk hidup lebih sehat.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Eksplorasi</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/herbalpedia">Daftar Tanaman</Link></li>
              <li><Link href="/tibbun-nabawi">Tibbun Nabawi</Link></li>
              <li><Link href="/artikel">Tips Kesehatan</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/admin">Dashboard Admin</Link></li>
              <li><Link href="#">Konsultasi Herbal</Link></li>
              <li><Link href="#">Tentang Kami</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Kontak</h3>
            <p className="text-sm text-gray-600">Email: info@herbalkita.com</p>
            <p className="text-sm text-gray-600">Alamat: Jl. Hijau Alam No. 12, Indonesia</p>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HerbalKita Herbalpedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
