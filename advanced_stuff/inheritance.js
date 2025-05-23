//inheritence

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // super sab kuch kar dega, super needs to be on top
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
 
const chai = new Teacher("dallas", "dallas@gmail.com", "dallasdsad")

chai.addCourse()

const masalachai = new User("masalachai")

masalachai.logMe()

 