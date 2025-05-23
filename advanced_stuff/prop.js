class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // a unique id
    static createId(){
        return `123123`
    }
}

const dallas = new User("dallas")

class BHM extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Rile = new BHM("Rile", "rile@isabitch.com")

console.log(Rile.createId()); // nahi karne dega access.
