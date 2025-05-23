// the finalish video
// getter and setter and stack overflow


class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this.__password.toUpperCase()
    }
    set password(value){
        this.__password = value //underscore dene se ab get me issue aayega

    }
}

const agnish = new User("agnish@gmail.com", "abc");
console.log(agnish.password);
console.log(agnish.email);