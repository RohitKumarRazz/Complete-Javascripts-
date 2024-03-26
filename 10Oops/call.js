function SetUsername(username){
    //complex Db calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password

}
const chai = new createUser("Rakesh", "db@gmail.com", "12345")
console.log(chai);