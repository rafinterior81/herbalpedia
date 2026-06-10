import Link from 'next/link';
import { Search, Heart, Sparkles, BookOpen } from 'lucide-react';
import { PLANTS, ARTICLES } from '@/lib/data';

export default function Home() {
  const featuredPlants = PLANTS.slice(0, 3);
  const featuredArticles = ARTICLES.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Kembali ke Alam untuk <span className="text-primary-600">Kesehatan</span> yang Lebih Baik
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Jelajahi ribuan tanaman obat tradisional, cara penggunaan, dan tips kesehatan dari pakar herbal Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/herbalpedia" className="bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
                Eksplorasi Herbal
              </Link>
              <Link href="/tibbun-nabawi" className="bg-white text-primary-700 border-2 border-primary-100 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-all">
                Tibbun Nabawi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Tanaman Populer</h2>
            <p className="text-gray-500 mt-2">Pilihan tanaman obat paling dicari minggu ini</p>
          </div>
          <Link href="/herbalpedia" className="text-primary-600 font-semibold hover:underline">Lihat Semua</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPlants.map((plant) => (
            <Link key={plant.id} href={`/herbalpedia/${plant.id}`} className="group card">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-700">
                  {plant.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plant.name}</h3>
                <p className="text-sm italic text-gray-500 mb-4">{plant.scientificName}</p>
                <div className="flex flex-wrap gap-2">
                  {plant.benefits.slice(0, 2).map((benefit, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{benefit}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Terpercaya</h3>
              <p className="text-gray-600">Data bersumber dari literatur medis dan pengalaman pengobatan tradisional yang terverifikasi.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mudah Disajikan</h3>
              <p className="text-gray-600">Dilengkapi panduan cara penyajian yang praktis dan bisa dilakukan di dapur rumah Anda.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Lengkap</h3>
              <p className="text-gray-600">Mencakup ribuan varietas tanaman obat mulai dari rimpang, daun, hingga bunga-bungaan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Artikel Kesehatan Terbaru</h2>
          <p className="text-gray-500 mt-2">Wawasan baru untuk mendukung gaya hidup sehat Anda</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <div key={article.id} className="group flex flex-col md:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <Link href={`/artikel/${article.id}`} className="text-primary-600 text-sm font-bold">Baca Selengkapnya →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
