class User {
    constructor(username){
        this.username = username

    }
    logME(){
        console.log(`Username: ${this.username}`);
    }
    static createID(){
        return `123`
    }
}
const rk = new User("Rohit")
//console.log(rk.createID());
class Teacher extends User{
    constructor(email, username){
        super(username)
        this.email = email
    }
}

const ip = new Teacher('iphone', 'i@phone@gamil.com')
console.log(ip.createID());