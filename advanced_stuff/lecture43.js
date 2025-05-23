// lecture 43
// magic of prototype
// array -> object -> null

function dallas (num){
    return num * 5;
}

dallas.power = 2

console.log(dallas(4));
console.log(dallas.power);

// har ek cheez JS me object hoti hai

function createrUser(username, score){
    this.username = username
    this.score = score
}

createrUser.prototype.increament = function(){
    this.score++; // jisne bhi bulaya hai uska value increase karo
}

createrUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai =new createrUser("chai", 25)
const tea = new createrUser("tea", 258)

chai.printMe()