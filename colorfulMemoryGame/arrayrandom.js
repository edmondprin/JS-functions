const numbers = [`${Math.floor(Math.random()*100)} + ${Math.floor(Math.random()*100)} = ${''}`];
console.log(numbers);

const numbers2 = [];
for (let i = 0; i < 11; i++) {
    numbers2[i] = Math.floor(Math.random()*45);
};
console.log("Numbers2:", numbers2);

const numbers3 = [];
for (let j = 0; j < 11; j++) {
    numbers3[j] = Math.floor(Math.random()*150);
};
console.log("Numbers3:", numbers3);

const numbers4 = numbers2.concat(numbers3);
console.log("Numbers4:", numbers4);