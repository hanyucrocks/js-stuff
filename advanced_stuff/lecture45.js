// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const jasmine = new User("jasminexoxo", "jasmine@gmail.com", "1234")

// console.log(jasmine.encryptPassword())
// console.log(jasmine.changeUserName());

//behind the scene

function User(username, email, password){
    this.username = username
        this.password = password
        this.email = email
}

User.prototype.encryptPassword = function(){
    return `${this.password}bhmistheshit`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const dallas = new User("dallasxoxo", "dallas@gmail.com", "12312344")

console.log(dallas.encryptPassword())
console.log(dallas.changeUserName());

