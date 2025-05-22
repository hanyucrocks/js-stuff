const user = {
    username: "agnish",
    loginCount: 10,
    signedIn: true,



    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
    }

}

function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("dallas", 12, true)
// usertwo karenge toh overwrite ho jayega, to fix this use new
console.log(userOne)
