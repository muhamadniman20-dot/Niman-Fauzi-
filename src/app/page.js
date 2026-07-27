"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {const [currentBanner, setCurrentBanner] = useState(0);
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
 <header className="bg-gradient-to-r from-red-600 via-red-700 to-black text-white p-8 shadow-xl">
  <h1 className="text-5xl font-extrabold">
    <div className="w-16 h-16 bg-white text-red-600 rounded-2xl flex items-center justify-center font-bold text-3xl mb-3">
  N
</div>
    NIMAN STORE
  </h1>

  <p className="mt-3 text-lg text-gray-200">
    Produk Viral & Affiliate TikTok
  </p>
<div className="flex gap-2 mt-4 flex-wrap">
  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
    🔥 Viral
  </span>

  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
    🛒 Affiliate
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


<section className="p-6">
  <div className="relative">
    <img
      src={banners[currentBanner]}
      alt="Banner"
      className="w-full h-72 object-cover rounded-xl shadow-xl"
    />

    <div className="absolute inset-0 bg-black/40 flex items-center px-10 rounded-xl">
  <div>
    <h2 className="text-5xl font-bold text-white">
      Temukan Produk Terbaik
    </h2>

    <p className="text-white text-lg mt-3">
      Fashion • Elektronik • Aksesoris • Affiliate Pilihan
    </p>
  </div>
</div>
  </div>
</section>

<section className="max-w-[1600px] mx-auto px-4 py-8">

  <div className="grid grid-cols-3 gap-4 mb-8">
    <div className="bg-white p-4 rounded-xl text-center shadow">
      <h3 className="text-2xl font-bold">100+</h3>
      <p>Produk</p>
    </div>

    <div className="bg-white p-4 rounded-xl text-center shadow">
      <h3 className="text-2xl font-bold">24 Jam</h3>
      <p>Update</p>
    </div>

    <div className="bg-white p-4 rounded-xl text-center shadow">
      <h3 className="text-2xl font-bold">100%</h3>
      <p>Gratis Akses</p>
    </div>
  </div>

  <h2 className="text-3xl font-bold mb-6">
  📦 Semua Produk
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl
 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
            >
              <img
  src="a_high_end_3d_product_showcase_scene_on_a_dark_ci.png"
  alt={product.name}
 className="w-full h-40 object-cover"
/>
<div className="p-3">

            <h3 className="font-bold text-lg text-slate-800">
                {product.name}
                </h3>
                <p className="text-red-600 text-xl font-bold">
  Rp {product.price?.toLocaleString("id-ID")}
</p>
<div className="mt-2">
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
    Stok: {product.stock}
  </span>
</div>
              <p>Stok: {product.stock}</p>

<div className="mb-3">
  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
    {product.category}
  </span>
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
      <footer className="bg-black text-white text-center p-8 mt-12">
  <h3 className="font-Bold text-2xl text-slate-800">
    OJI Shoping day
  </h3>

  <p className="text-gray-400 mt-2">
    Belanja Dengan Cepat Tanpa Gangguan Ongkir 
  </p>

  <p className="text-gray-500 mt-4">
    © 2026 OJI OFICIAL
  </p>
</footer>
    </main>
  );
}