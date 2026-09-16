function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}
const cart = [
    { title: "Laptop", price: 1000, discountPercent: 10 },
    { title: "Mouse", price: 20, discountPercent: 5 },
    { title: "Keyboard", price: 50, discountPercent: 0 }
];
function applyDiscounts(cart) {
    const result = [];
    for (const item of cart) {
        const hargaAkhir = calculateDiscountedPrice(item.price, item.discountPercent);
        result.push({ title: item.title, hargaAkhir});
    }
    return result;
}
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Keyboard", price: 75, category: "accessories", stock: 10 },
    { id: 5, title: "Mouse", price: 40, category: "accessories", stock: 20 },
    { id: 6, title: "Monitor", price: 350, category: "electronics", stock: 8 },
    { id: 7, title: "Tablet", price: 500, category: "tablets", stock: 12 },
    { id: 8, title: "Smartwatch", price: 250, category: "wearables", stock: 7 },
    { id: 9, title: "Camera", price: 900, category: "cameras", stock: 6 },
    { id: 10, title: "Printer", price: 200, category: "electronics", stock: 9 },
    { id: 11, title: "Speaker", price: 150, category: "audio", stock: 14 },
    { id: 12, title: "Webcam", price: 80, category: "accessories", stock: 18 },
    { id: 13, title: "Microphone", price: 120, category: "audio", stock: 11 },
    { id: 14, title: "Gaming Chair", price: 300, category: "furniture", stock: 5 },
    { id: 15, title: "Gaming Console", price: 600, category: "gaming", stock: 4 },
    { id: 16, title: "Game Controller", price: 90, category: "gaming", stock: 13 },
    { id: 17, title: "Power Bank", price: 60, category: "accessories", stock: 25 },
    { id: 18, title: "External Hard Drive", price: 130, category: "storage", stock: 10 },
    { id: 19, title: "USB Flash Drive", price: 30, category: "storage", stock: 30 },
    { id: 20, title: "Router", price: 110, category: "networking", stock: 16 },
    { id: 21, title: "Smart TV", price: 700, category: "electronics", stock: 6 },
    { id: 22, title: "Projector", price: 450, category: "electronics", stock: 4 },
    { id: 23, title: "MacBook", price: 1500, category: "laptops", stock: 3 },
    { id: 24, title: "Android Phone", price: 650, category: "phones", stock: 17 },
    { id: 25, title: "Bluetooth Earbuds", price: 90, category: "audio", stock: 22 },
    { id: 26, title: "Mechanical Keyboard", price: 130, category: "accessories", stock: 8 },
    { id: 27, title: "Gaming Mouse", price: 70, category: "accessories", stock: 19 },
    { id: 28, title: "Graphics Tablet", price: 280, category: "tablets", stock: 5 },
    { id: 29, title: "Action Camera", price: 400, category: "cameras", stock: 7 },
    { id: 30, title: "Smart Speaker", price: 180, category: "audio", stock: 12 }
];
function findProductById(products, id) {
    return products.find(product => product.id === id);
}
function getLowStockProducts(products, threshold) {
    return products.filter(product => product.stock < threshold);
}
getLowStockProducts(products, 10);
function updateStock(products, id, newStock) {
    return products.map(product => product.id === id ? { ...product, stock: newStock } : product);
}
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
const allTags = nestedProducts.map(product => product.tags);
console.log("Hasil map allTags:", allTags);

function findProductsByTag(products, tag) {
    return products.filter(product => product.tags.includes(tag));
}
console.log("Hasil filter findProductsByTag:", findProductsByTag(nestedProducts, "electronics"));

const productReviewsCount = nestedProducts.map(product => {
    return { 
        id: product.id,
        title: product.title, 
        totalReviews: product.reviews.length
    };
});
console.log("Hasil map productReviewsCount:", productReviewsCount);

const perfectReviews = nestedProducts.flatMap(product => product.reviews.filter(review => review.rating === 5));
console.log("Hasil filter perfectReviews:", perfectReviews);

const averageRatings = nestedProducts.map(product => { 
    const reviews =product.reviews;
    if (reviews.length === 0) {
        return { id: product.id, title: product.title, averageRating: 0 };
    }
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return { id: product.id, title: product.title, averageRating };
});
console.log("Hasil map averageRatings:", averageRatings);

const mostReviewedProducts = nestedProducts.reduce((most, current) => {
    return current.reviews.length > most.reviews.length ? current : most;
}, { reviews: [] });
console.log("Hasil reduce mostReviewedProducts:", mostReviewedProducts);

const allRatingsFlat = nestedProducts.flatMap(product => product.reviews.map(review => review.rating));
console.log("Hasil flatMap allRatingsFlat:", allRatingsFlat);

const alTagsFlat = nestedProducts.flatMap(product => product.tags);
console.log("Hasil flatMap alTagsFlat:", alTagsFlat);

const allComments = nestedProducts.flatMap(product =>product.reviews.map(review => review.comment));
console.log("Hasil flatMap allComments:", allComments);