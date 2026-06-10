"use client";
import Link from 'next/link';
import { Leaf, Menu, X, Search, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="text-primary-600" size={32} />
              <span className="font-bold text-xl tracking-tight text-primary-900">HerbalKita</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/herbalpedia" className="text-gray-600 hover:text-primary-600 font-medium">Herbalpedia</Link>
            <Link href="/tibbun-nabawi" className="text-gray-600 hover:text-primary-600 font-medium">Tibbun Nabawi</Link>
            <Link href="/artikel" className="text-gray-600 hover:text-primary-600 font-medium">Artikel</Link>
            <Link href="/admin" className="flex items-center gap-1 text-primary-700 bg-primary-50 px-3 py-1 rounded-full text-sm font-semibold hover:bg-primary-100">
              <LayoutDashboard size={16} />
              Admin
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2">
          <Link href="/herbalpedia" className="block px-3 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">Herbalpedia</Link>
          <Link href="/tibbun-nabawi" className="block px-3 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">Tibbun Nabawi</Link>
          <Link href="/artikel" className="block px-3 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">Artikel</Link>
          <Link href="/admin" className="block px-3 py-2 text-primary-600 font-bold hover:bg-primary-50 rounded-lg">Admin Panel</Link>
        </div>
      )}
    </nav>
  );
}
