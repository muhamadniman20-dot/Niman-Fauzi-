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
      src={product.image}

      alt="Banner"
      className="w-full h-72 object-cover rounded-xl shadow-xl"
    />

</div>

<div className="bg-white rounded-2xl shadow p-6 mb-8">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-bold text-red-600">
      ⚡ FLASH SALE
    </h2>

    <span className="text-red-500 font-semibold">
      Lihat Semua →
    </span>
  </div>
</div>


<h2 className="text-3xl font-bold mb-6">
  📦 🛍 Semua Produk Pilihan
``
</h2>

<div className="bg-white rounded-2xl shadow p-6 mb-8">
  <h2 className="text-xl font-bold mb-4">
    KATEGORI
  </h2>

  <div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">👕</span>
  <p>Fashion</p>
</div>

<div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">📱</span>
  <p>Elektronik</p>
</div>

<div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">⌚</span>
  <p>Aksesoris</p>
</div>

<div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">👜</span>
  <p>Tas</p>
</div>

<div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">👟</span>
  <p>Sepatu</p>
</div>

<div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">🎧</span>
  <p>Headset</p>
</div>

<div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">🏠</span>
  <p>Rumah</p>
</div>

<div className="bg-white px-4 py-3 rounded-2xl shadow hover:text-red-500 cursor-pointer">
  <span className="text-2xl">🎮</span>
  <p>Gaming</p>
</div>

</div>

  <h2 className="text-3xl font-bold mb-6">
  📦 🛍 Semua Produk Pilihan
``
</h2>


<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <img
  src={product.image}
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

<p className="text-gray-500 text-sm">
  Terjual 120+
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
  cclassName="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl w-full font-semibold transition"

>
  🛍️ Belanja Sekarang
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