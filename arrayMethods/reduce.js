/*
Reduce:
- Reduces array to a single value
- Apply a function to each element
- Useful for aggregating data
*/

const orderPrices = [50, 30, 25, 40, 15];

const totalOrderValue = orderPrices.reduce((total, price) => total + price, 0);
console.log('The total value of the order is', totalOrderValue);