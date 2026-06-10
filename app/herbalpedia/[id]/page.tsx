"use client";
import { useParams, useRouter } from 'next/navigation';
import { PLANTS } from '@/lib/data';
import { ArrowLeft, CheckCircle2, FlaskConical, Lightbulb, ChefHat } from 'lucide-react';
import Link from 'next/link';

export default function PlantDetail() {
  const params = useParams();
  const router = useRouter();
  const plant = PLANTS.find(p => p.id === params.id);

  if (!plant) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Tanaman tidak ditemukan</h2>
        <Link href="/herbalpedia" className="text-primary-600">Kembali ke daftar</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-500 hover:text-primary-600 mb-6 transition-colors">
            <ArrowLeft size={20} /> Kembali
          </button>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="bg-primary-50 text-primary-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                {plant.category}
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">{plant.name}</h1>
              <p className="text-xl italic text-gray-500 mb-8">{plant.scientificName}</p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-primary-100 flex gap-4">
                  <div className="text-primary-600"><CheckCircle2 size={28} /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Manfaat Kesehatan</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {plant.benefits.map((b, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center gap-2">• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                  <ChefHat size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Cara Penyajian</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {plant.preparation}
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tips Herbal</h2>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 text-gray-700 italic">
                "{plant.tips}"
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-primary-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
               <FlaskConical className="absolute -bottom-4 -right-4 text-white/10" size={150} />
               <h3 className="text-xl font-bold mb-4 relative z-10">Peringatan</h3>
               <p className="text-primary-100 text-sm relative z-10 leading-relaxed">
                 Informasi ini bersifat edukatif. Selalu konsultasikan dengan ahli herbal atau dokter sebelum memulai terapi herbal, terutama bagi wanita hamil, menyusui, atau mereka yang sedang dalam pengobatan rutin.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
