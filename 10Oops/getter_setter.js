class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email =value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(vlaue){
        this._password = vlaue
    }
}
const rohit = new User("rk@rohit.com", "123abc")
console.log(rohit.password);
console.log(rohit.email);