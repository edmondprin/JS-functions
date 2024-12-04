/*
To shuffle an array a of n elements (indices 0..n-1):
  for i from n - 1 downto 1 do
       j = random integer with 0 <= j <= i
       exchange a[j] and a[i]
*/


const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

let score = 0;

if (colors.includes('white') || colors.includes('brown')) {
    console.log('great');
    score += 1;
} else {
    console.log('not great');
    score -= 1;
}
console.log("score:", score);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // console.log("before swap:", "i:", [i], "j:", [j]);
        [array[i], array[j]] = [array[j], array[i]];
        // console.log("after swap:", "i:", [i], "j:", [j]);
    }
    return array;
}

cards = shuffle(colors.concat(colors));
console.log("cards: ", cards);

cards2 = shuffle(colors);
console.log("cards2: ", cards2);