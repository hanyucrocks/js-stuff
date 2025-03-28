// lecture 15 lets gooo

// array part 2
const marvel_heroes = ["ironman", "spiderman", "drstrange"]
const dc = ["batman", "flash", "batman"]

// marvel_heroes.push(dc);

// console.log(marvel_heroes);
// marvel_heroes.concat(dc);
// console.log(marvel_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
const allheroes=[...marvel_heroes, ...dc]
console.log(allheroes);
console.log(real_another_array);

console.log(Array.from("Jasmine"));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));