const user = {
    username: "rohit",
    loginC: 8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginC, isLoggedIn){
    this.username = username
    this.loginC = loginC
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    //return this //implicitly define
}
const userOne = new User("Rohit", 9, true)
const userTwo = new User("Ankit", 19, true)
console.log(userOne);
// console.log(userTwo);







