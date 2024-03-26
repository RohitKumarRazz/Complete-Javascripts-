//ES6
class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("rohit", "rohit@gmail.com", "1234")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())


//behind the scene

function Users(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
Users.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
Users.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

const tea = new Users("ankit", "ankit@gmail.com", "1234")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())





