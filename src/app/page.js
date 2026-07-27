"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
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
  <img
    src="https://picsum.photos/1200/300"
    alt="Banner"
    className="w-full h-72 object-cover rounded-3xl shadow-xl"
  />
</section>
      <section className="p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          📦 Semua Produk
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-cover"
/>
<div className="p-5">

            <h3 className="font-Bold text-2xl text-slate-800">
                {product.name}
                </h3>
                <p className="text-red-600 font-bold text-xl">
  Rp {product.price?.toLocaleString("id-ID")}
</p>

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
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block mt-3 w-full text-center transition"

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