const User = {
    _email: 'hdw@gmail.com',
    _password: '1ca',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}