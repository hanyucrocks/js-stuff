// lecture 11 lets go, strings in js

const name = "Amy"
const repoCount = 23

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('jasmine')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 3);
console.log(anotherString);

// trim and replace

const newStringone = "   agnish     " // spaces nahi chahiy mereko
console.log(newStringone);
console.log(newStringone.trim());


const url = "https://agnish.com/whats%20upboii"
console.log(url.replace('%20', '-'))