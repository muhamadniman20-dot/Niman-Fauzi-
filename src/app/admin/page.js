"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [price, setPrice] = useState("");
const [editingId, setEditingId] = useState(null);
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
  price: Number(price),
}
]);

  if (!error) {
    alert("Produk berhasil disimpan!");
loadProducts();
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
  type="number"
  placeholder="Harga"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
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
    
    <hr className="my-6" />

<h2 className="text-2xl font-bold mb-4">
  Daftar Produk
</h2>
<p>Total Produk: {products.length}</p>

<div className="space-y-3">
  {products.map((product) => (
    <div
      key={product.id}
      className="border p-3 rounded flex justify-between items-center"
    >
      <div>
        <p className="font-bold">{product.name}</p>
        <p>Rp {product.price}</p>
     </div>

      <button
        onClick={() => {
          setEditingId(product.id);
        setName(product.name);
    setImage(product.image);
    setStock(product.stock);
    setCategory(product.category);
    setAffiliateLink(product.affiliate_link);
    setPrice(product.price);
  }}
  className="bg-yellow-500 text-white px-3 py-2 rounded"
>
  ✏️ Edit
</button>
</div>
))}
</div>

</main>
  );
}