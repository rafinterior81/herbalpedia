"use client";
import { useState } from 'react';
import { PLANTS, ARTICLES } from '@/lib/data';
import { Plus, Edit2, Trash2, Search, LayoutDashboard, Leaf, FileText, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'plants' | 'articles'>('plants');
  const [search, setSearch] = useState("");

  const filteredPlants = PLANTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  const filteredArticles = ARTICLES.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
            <LayoutDashboard size={18} />
          </div>
          <span className="font-bold text-gray-900">Admin Panel</span>
        </div>
        <nav className="p-4 flex-grow space-y-1">
          <button 
            onClick={() => setActiveTab('plants')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'plants' ? 'bg-primary-50 text-primary-700 font-bold' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Leaf size={20} /> Tanaman Obat
          </button>
          <button 
            onClick={() => setActiveTab('articles')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'articles' ? 'bg-primary-50 text-primary-700 font-bold' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <FileText size={20} /> Artikel
          </button>
          <div className="pt-4 mt-4 border-t border-gray-100">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100">
              <Settings size={20} /> Pengaturan
            </button>
          </div>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-grow p-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Manajemen {activeTab === 'plants' ? 'Tanaman' : 'Artikel'}
            </h1>
            <p className="text-gray-500">Kelola konten yang ditampilkan di aplikasi HerbalKita</p>
          </div>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-700 shadow-lg shadow-primary-200 transition-all">
            <Plus size={20} /> Tambah Data
          </button>
        </header>

        {/* Filters/Search */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder={`Cari ${activeTab === 'plants' ? 'tanaman' : 'artikel'}...`}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 rounded-lg outline-none transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table/List */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-bold text-gray-600">ID</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-600">Nama / Judul</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-600">Kategori</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-600 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(activeTab === 'plants' ? filteredPlants : filteredArticles).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono">#{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={item.image} className="w-10 h-10 rounded-lg object-cover" alt="" />
                      <div>
                        <div className="font-bold text-gray-900">{ 'name' in item ? item.name : item.title }</div>
                        { 'scientificName' in item && <div className="text-xs italic text-gray-400">{item.scientificName}</div> }
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
