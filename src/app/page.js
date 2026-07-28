"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() 
{const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
];
  const [products, setProducts] = useState([]);

    useEffect(() => {
  const timer = setInterval(() => {
    setCurrentBanner((prev) =>
      (prev + 1) % banners.length
    );
  }, 4000);

  loadProducts();
  
  return () => clearInterval(timer);
}, []);
    

  async function loadProducts() {
    const { data } = await supabase
      .from("products")
      .select("*");

    setProducts(data || []);
  }

  return (
    <main className="min-h-screen bg-slate-100">
 <header
  className="text-white p-8 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://i.imgur.com/mLjsDIU.png')",
  }}
>
  <h1 className="text-5xl font-extrabold">
    <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center font-bold text-3xl mb-3">
  WT
</div>
    Waroeng Taeyo 
  </h1>

  <p className="mt-3 text-lg text-gray-200">
    Produk Viral & Barang Yang Pasti Dipakai 
  </p>
<div className="flex gap-2 mt-4 flex-wrap">
  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
    🔥 Viral
  </span>

  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
    🛒 Happy
  </span>

  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
    ⚡ Trending
  </span>
</div>
  <a
  href="https://wa.me/628123456789"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-3 bg-green-500 px-4 py-2 rounded-lg"
>

WhatsApp
</a>

 
</header>
<div className="mt-6">
  <input
    type="text"
    placeholder="🔍 Cari produk..."
    className="w-full max-w-lg px-4 py-3 rounded-xl text-black shadow-lg"
  />
</div>

<section className="p-6">
  <div className="absolute bottom-8 left-8 z-10">
    <img
      src={banners[currentBanner]}
      alt="Banner"
      className="w-full h-72 object-cover rounded-xl shadow-xl"
    />

  
  </div>
<div className="max-w-4xl mx-auto my-6">
  <input
    type="text"
    placeholder="🔍 Cari fashion, elektronik, aksesoris..."
    className="w-full p-4 rounded-full border shadow-lg focus:outline-none"
  />
</div>
<div className="flex flex-wrap justify-center gap-3 mb-8">
  <button px-5 py-2 rounded-className="bg-white full shadow hover:bg-red-500 hover:text-white transition">
    👕 Fashion
  </button>

  <button className="bg-white px-5 py-2 rounded-full shadow hover:bg-blue-500 hover:text-white transition">
    📱 Elektronik
  </button>

  <button className="bg-white px-5 py-2 rounded-full shadow hover:bg-green-500 hover:text-white transition">
    ⌚ Aksesoris
  </button>

  <button className="bg-white px-5 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition">
    🏠 Rumah Tangga
  </button>

  <button className="bg-white px-5 py-2 rounded-full shadow hover:bg-pink-500 hover:text-white transition">
    👜 Tas
  </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
  
</div>
  <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-3 rounded-xl text-center shadow-lg">
  <h3 className="text-lg font-bold">🔥 Produk Viral</h3>
  <p className="text-sm">Favorit Pembeli</p>
</div>

<div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3 rounded-xl text-center shadow-lg">
  <h3 className="text-lg font-bold">⚡ Flash Sale</h3>
  <p>Promo Terbatas</p>
</div>

<div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-xl text-center shadow-lg">
  <h3 className="text-lg font-bold">✅ Produk Original</h3>
  <p>Kualitas Terjamin</p>
</div>

  <h2 className="text-3xl font-bold mb-6">
  📦 Semua Produk
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
  <div className="bg-orange-500 text-white p-5 rounded-xl">
    <h3 className="font-bold text-xl">🔥 Produk Viral</h3>
    <p>Produk paling ramai dicari</p>
  </div>

  <div className="bg-blue-500 text-white p-5 rounded-xl">
    <h3 className="font-bold text-xl">⚡ Promo Hari Ini</h3>
    <p>Diskon dan penawaran terbaik</p>
  </div>

  <div className="bg-green-500 text-white p-5 rounded-xl">
    <h3 className="font-bold text-xl">🚀 Produk Terbaru</h3>
    <p>Update produk terbaru setiap hari</p>
  </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <img
  src={banners[currentBanner]}
  alt={product.name}
 className="w-full h-40 object-cover"
/>
<div className="p-3">

            <h3 className="font-bold text-lg text-slate-800">
                {product.name}
                </h3>
<div className="mt-2">
  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
    🔥 DISKON
  </span>
</div>

<p className="text-gray-400 line-through text-sm">
  Rp 199.000
</p>
                <p className="text-red-600 text-3xl font-black">
  Rp {product.price?.toLocaleString("id-ID")}
</p>
<p className="text-yellow-500 text-sm mt-1">
  ⭐⭐⭐⭐⭐ 5.0
</p>
``
<div className="mt-2">
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
    Stok: {product.stock}
  </span>
</div>

<div className="mb-3">
  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
  #{product.category}
</span>
``<div className="mt-2">
  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
    🚚 Gratis Ongkir
  </span>
</div>
</div>
<a
  href={product.affiliate_link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl w-full font-semibold transition"

>
  Beli Sekarang
  </a>
</div>    
           </div>
          ))}
        </div>
      </section>
      <footer className="bg-black text-white text-center p-10 mt-16">
  <h2 className="text-3xl font-bold">
    WAROENG TAEYO
  </h2>

  <p className="text-gray-400 mt-2">
    Fashion • Elektronik • Kebutuhan Harian
  </p>

  <p className="text-gray-500 mt-6">
    © 2026 WAROENG TAEYO
  </p>
</footer>
    </main>
  );
}