/*
2D arrays (or grids):
- Organize elements in rows and columns
- Versatile data structure
- Access elements using two indices
*/

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(grid);
console.log(grid[0]);
console.log(grid[1][2]);

/*
Nested loop to traverse a 2D array
Helps performs operations on each element

i iterates through rows
j iterates through columns
*/



for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[i].length; j++) {
        console.log(`Element at (${i}, ${j}: ${grid[i][j]})`);
    }
}