import { PLANTS } from '@/lib/data';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function TibbunNabawi() {
  const nabawiPlants = PLANTS.filter(p => p.isTibbunNabawi);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-primary-800 to-green-900 rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-primary-200">
            <Star size={20} fill="currentColor" />
            <span className="uppercase tracking-widest font-bold text-sm">Sunnah Medicine</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6">Tibbun Nabawi</h1>
          <p className="text-xl text-primary-100 leading-relaxed">
            Meneladani cara hidup sehat dan pengobatan alami berdasarkan ajaran Rasulullah SAW untuk kesehatan lahir dan batin.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 translate-y-1/4">
          <Star size={400} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nabawiPlants.map((plant) => (
          <Link key={plant.id} href={`/herbalpedia/${plant.id}`} className="group flex bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
            <div className="w-1/3 relative">
              <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
            </div>
            <div className="w-2/3 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plant.name}</h2>
              <p className="text-gray-500 mb-4 italic">{plant.scientificName}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {plant.benefits.slice(0, 2).map((b, i) => (
                  <span key={i} className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-bold">{b}</span>
                ))}
              </div>
              <span className="text-primary-600 font-bold">Pelajari Khasiatnya →</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Prinsip Pengobatan Nabawi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Mencegah Lebih Baik", desc: "Menjaga pola makan (Halalan Thayyiban) dan kebersihan diri sebagai fondasi utama." },
            { title: "Keyakinan", desc: "Keyakinan akan kesembuhan dari Allah SWT merupakan 50% dari proses penyembuhan." },
            { title: "Metode Alami", desc: "Mengutamakan bahan dari alam seperti Madu, Habbatussauda, Zaitun, dan metode Bekam." }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
