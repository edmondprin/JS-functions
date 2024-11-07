/*
Map:
- Creates a new array
- Applies the provided function to each element;
- Transforms data without modifying the original array
*/

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 },
];

products.map((product) => {
    console.log(`The price of a ${product.name} is $${product.price}`);
});

let inflation = products.map((product) => {
    console.log(`The new price of this ${product.name} is ${product.price + 200}`)
});