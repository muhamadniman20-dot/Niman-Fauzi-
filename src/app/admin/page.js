"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
async function saveProduct() {
  const { error } = await supabase
    .from("products")
    .insert([
      {
  name,
  image,
  stock: Number(stock),
  category,
  affiliate_link: affiliateLink,
}
    ]);

  if (!error) {
    alert("Produk berhasil disimpan!");

    setName("");
    setImage("");
    setStock("");
    setCategory("");
  } else {
    alert("Gagal menyimpan produk");
    console.log(error);
  }
}

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Admin NIMAN STORE
      </h1>

      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="URL Gambar"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Stok"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Kategori"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full"
        />
<input
  type="text"
  placeholder="Affiliate Link"
  value={affiliateLink}
  onChange={(e) => setAffiliateLink(e.target.value)}
  className="border p-2 w-full"
/>
        <button
  type="button"
  onClick={saveProduct}
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  Simpan Produk
</button>
      </form>
    </main>
  );
}