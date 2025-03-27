// lecture 6 lets gooo conversion stuff

let score = "33abc"


console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN aayega, unvalid number.

// "33" = 33
// 3ab == NaN not a number
// true == 1, false == 0, "" = false, "a" = true
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   
