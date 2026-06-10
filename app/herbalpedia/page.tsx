"use client";
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { PLANTS } from '@/lib/data';
import Link from 'next/link';

export default function Herbalpedia() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", ...Array.from(new Set(PLANTS.map(p => p.category)))];

  const filteredPlants = PLANTS.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Herbalpedia</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Direktori lengkap tanaman obat tradisional Indonesia beserta khasiat dan pengolahannya.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Cari tanaman (misal: Jahe, Kunyit...)" 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat 
                ? "bg-primary-600 text-white shadow-md shadow-primary-200" 
                : "bg-white text-gray-600 border border-gray-100 hover:border-primary-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPlants.map((plant) => (
            <Link key={plant.id} href={`/herbalpedia/${plant.id}`} className="group card flex flex-col h-full">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-bold text-primary-600 mb-1">{plant.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plant.name}</h3>
                <p className="text-xs italic text-gray-500 mb-4">{plant.scientificName}</p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-primary-600 font-bold text-sm">
                  Lihat Detail →
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-xl text-gray-400">Tanaman tidak ditemukan. Coba gunakan kata kunci lain.</p>
        </div>
      )}
    </div>
  );
}
