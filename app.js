function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

const price = 1000;
const discountPercent = 10;

const finalPrice = calculateDiscountedPrice(
    price,
    discountPercent
);

console.log("Harga awal:", price);
console.log("Diskon:", discountPercent + "%");
console.log("Harga setelah diskon:", finalPrice);

const cart = [
    {
        title: "Laptop",
        price: 1000,
        discountPercent: 10
    },
    {
        title: "Mouse",
        price: 20,
        discountPercent: 5
    },
    {
        title: "Keyboard",
        price: 50,
        discountPercent: 0
    }
];

function applyDiscounts(cart) {
    const result = [];

    for (const item of cart) {
        const finalPrice =
            item.price -
            (item.price * item.discountPercent) / 100;

        result.push({
            title: item.title,
            price: item.price,
            discountPercent: item.discountPercent,
            finalPrice: finalPrice
        });
    }

    return result;
}

const discountedCart = applyDiscounts(cart);

console.log(discountedCart);