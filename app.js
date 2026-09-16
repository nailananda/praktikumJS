// BAGIAN 1 - JAVASCRIPT FUNDAMENTALS & PROBLEM SOLVING
// Latihan 1.1 — Menghitung Harga Setelah Diskon
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
// Latihan 1.2 — Menaikkan Tingkat Kesulitan (Menggunakan Dataset CART)
const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 }
];
function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(item.price, item.discountPercent);
    result.push({ title: item.title, finalPrice });
  }
  return result;
}
console.log("Harga Akhir:", applyDiscounts(cart));

// BAGIAN 2 - ARRAY OF OBJECTS & ARRAY METHODS
const products = [
  { id: 1, title: "Laptop", stock: 15 },
  { id: 2, title: "Smartphone", stock: 5 }
];
// Latihan 2.1 — Mencari Produk Berdasarkan ID
function findProductById(products, id) {
  return products.find(product => product.id === id);
}
// Latihan 2.2 — Menyaring Stok Menipis (< 10)
function getLowStockProducts(products) {
  return products.filter(product => product.stock < 10);
}
// Latihan 2.3 — Mengubah Data Tanpa Mutasi
function updateStock(products, id, newStock) {
  return products.map(product => 
    product.id === id ? { ...product, stock: newStock } : product
  );
}
console.log("Cari ID 1:", findProductById(products, 1));
console.log("Stok < 10:", getLowStockProducts(products));
console.log("Update Stok ID 2 jadi 20:", updateStock(products, 2, 20));


// BAGIAN 3 - NESTED DATA
const nestedProducts = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];
// No 1. Ambil semua tag (masih berbentuk array di dalam array)
const allTags = nestedProducts.map(product => product.tags);
console.log("Hasil All Tags:", allTags);
// No 2. Fungsi mencari produk berdasarkan tag
function findProductsByTag(productsArray, tag) {
  return productsArray.filter(product => product.tags.includes(tag));
}
console.log("Filter 'electronics':", findProductsByTag(nestedProducts, "electronics"));

// No 3. Mengembalikan objek { id, title, totalReviews }
const productReviewCounts = nestedProducts.map(product => {
  return {
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
  };
});
console.log("Total Reviews:", productReviewCounts);

// No 4. Mengumpulkan ulasan pembeli yang ratingnya tepat 5
const perfectReviews = nestedProducts
  .flatMap(product => product.reviews)
  .filter(review => review.rating === 5);
console.log("Hasil Perfect Reviews:", perfectReviews);

// No 5. Menghitung rata-rata rating secara manual
const averageRatings = nestedProducts.map(product => {
  const reviews = product.reviews;
  if (reviews.length === 0) {
    return { id: product.id, title: product.title, averageRating: 0 };
  }
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;
  
  return { 
    id: product.id, 
    title: product.title, 
    averageRating: Number(averageRating.toFixed(1)) 
  };
});
console.log("Average Ratings Manual:", averageRatings);
// No 6. Menemukan produk dengan review terbanyak
const mostReviewedProducts = nestedProducts.reduce((most, current) => {
  return current.reviews.length > most.reviews.length ? current : most;
});
console.log("Most Reviewed:", mostReviewedProducts);
// No 7. Mengumpulkan seluruh nilai rating menjadi array datar
const allRatingsFlat = nestedProducts.flatMap(product => 
  product.reviews.map(review => review.rating)
);
console.log("All Ratings Flat:", allRatingsFlat);


// BAGIAN 4 - FLATTENING DATA
// Latihan 4.1 — Mengambil seluruh tag langsung rata dengan .flatMap()
const allTagsFlat = nestedProducts.flatMap(product => product.tags);
console.log("All Tags Flat:", allTagsFlat);
// Latihan 4.2 — Mengambil seluruh teks comment dari semua ulasan
const allComments = nestedProducts
  .flatMap(product => product.reviews)
  .map(review => review.comment);
console.log("All Comments:", allComments);