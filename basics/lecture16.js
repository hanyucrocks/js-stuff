// lecture 16 letss goooooo

// singleton

// object literals

const mySym  = Symbol("key1")

const JsUser = {
    name: "Agnish",
    age: 20,
    location: "Jamshedpur",
    email: "agonthemicbruh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hi bro");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// finished
