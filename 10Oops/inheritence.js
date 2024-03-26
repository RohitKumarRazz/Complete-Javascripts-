class User {
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`UserName is: ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New Course is added By ${this.username}`);
    }
}
const chai = new Teacher("Rohit", "rk@gamil.com", "12356")
chai.addCourse()
chai.logMe()

const maslatea = new User("masalaTea")
maslatea.logMe()

console.log(chai === maslatea);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
