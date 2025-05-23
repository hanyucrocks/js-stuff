// call and this in javascript

function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createrUser(username, email, password){
    setUsername.call(this, username) // this karke context pass hogya
    this.email = email
    this.password = password
}

const chai = new createrUser("chai", "chai@fb.com", "123")
console.log(chai)