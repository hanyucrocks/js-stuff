// lecture 23
// this and arrow function

const user = {
    username: "jazz",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website!`); // this agya, current context.
        console.log(this);
    }

}

// user.welcomeMessage()

// user.username = "sam" // yaha pe value change hogya toh output sam aayega

// console.log(this);

// function chai(){
//     let username = "amy"
//     console.log(this);
// }
// chai() // is se bahut kuch aayega, this has a lot of things.

// const chai = () => { // => ye arrow function ban gaya
//     let username = "amy"
//     console.log(this.username);
// }

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo2 = (num1, num2) => (num1 + num2) // ye bhi run karega

console.log(addTwo(3, 4))
console.log(addTwo2(3, 2))


