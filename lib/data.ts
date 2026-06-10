export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  benefits: string[];
  preparation: string;
  tips: string;
  image: string;
  isTibbunNabawi?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

export const PLANTS: Plant[] = [
  {
    id: "1",
    name: "Jahe Merah",
    scientificName: "Zingiber officinale var. rubrum",
    category: "Rimpang",
    benefits: ["Meningkatkan imun tubuh", "Meredakan nyeri sendi", "Menghangatkan tubuh"],
    preparation: "Geprek jahe, rebus dengan air mendidih selama 10 menit. Tambahkan madu secukupnya.",
    tips: "Pilih jahe yang masih keras dan tidak keriput untuk kandungan minyak atsiri terbaik.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987cb9724?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "Kunyit",
    scientificName: "Curcuma longa",
    category: "Rimpang",
    benefits: ["Anti-inflamasi alami", "Detoksifikasi hati", "Mencegah kanker"],
    preparation: "Parut kunyit, ambil sarinya atau seduh bubuk kunyit dengan air hangat.",
    tips: "Konsumsi bersama sedikit lada hitam untuk meningkatkan penyerapan kurkumin oleh tubuh.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Jintan Hitam (Habbatussauda)",
    scientificName: "Nigella sativa",
    category: "Biji",
    benefits: ["Mengobati berbagai macam penyakit", "Asma", "Diabetes", "Hipertensi"],
    preparation: "Dapat dikonsumsi dalam bentuk minyak atau biji yang diseduh.",
    tips: "Sangat baik dikonsumsi saat perut kosong di pagi hari.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&q=80&w=800",
    isTibbunNabawi: true
  },
  {
    id: "4",
    name: "Madu",
    scientificName: "Mel depuratum",
    category: "Cairan",
    benefits: ["Sumber energi", "Penyembuh luka", "Kesehatan pencernaan"],
    preparation: "Minum langsung atau campur dengan air hangat (jangan air mendidih).",
    tips: "Gunakan sendok kayu atau plastik saat mengambil madu untuk menjaga kualitasnya.",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=800",
    isTibbunNabawi: true
  },
  {
    id: "5",
    name: "Lidah Buaya",
    scientificName: "Aloe vera",
    category: "Daun",
    benefits: ["Mengatasi luka bakar", "Kesehatan rambut", "Melembabkan kulit"],
    preparation: "Ambil gel bening di dalamnya, oleskan pada kulit atau buat jus.",
    tips: "Cuci bersih getah kuning (aloin) karena dapat menyebabkan iritasi.",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "a1",
    title: "Rahasia Hidup Sehat dengan Jamu Tradisional",
    excerpt: "Mengenal lebih dalam warisan leluhur untuk kesehatan modern.",
    content: "Jamu telah menjadi bagian tak terpisahkan dari budaya Indonesia. Menggunakan bahan alami seperti kunyit, temulawak, dan jahe, jamu menawarkan solusi kesehatan tanpa efek samping kimia yang berat...",
    category: "Gaya Hidup",
    date: "2024-05-20",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "a2",
    title: "5 Herbal Terbaik untuk Menjaga Imunitas",
    excerpt: "Musim pancaroba memerlukan perlindungan ekstra bagi tubuh Anda.",
    content: "Di masa perubahan cuaca, tubuh rentan terserang penyakit. Herbal seperti Sambiloto, Jahe, dan Meniran telah terbukti secara klinis meningkatkan daya tahan tubuh melalui stimulasi sistem imun...",
    category: "Tips Kesehatan",
    date: "2024-05-18",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
  }
];
