/*
Filter:
- Creates a new array
- Contains elements that pass specific conditions
- Extracts specific data
*/

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Chess Trainer', price: 250 },
    { name: 'Monitor', price: 125 },
    { name: 'Keyboard', price: 75 },
]

function filterProductsByPriceRange(products, minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}

const minPrice = 100;
const maxPrice = 500;

const filteredProducts = filterProductsByPriceRange(products, minPrice, maxPrice);

filteredProducts.forEach((product) => {
    console.log(`${product.name} is of $${product.price}`);
});