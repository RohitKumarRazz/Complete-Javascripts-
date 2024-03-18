//# Primitive 

// 7types : String, Number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreV = 100.3

const isLoggedIn = false
const outTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 55464845441945n







//# Reference Type (Non-primitive)

//Type: Array, objects, Functions
//array
const heros = ["saktiman", "naagraj", "diga"]
//object 
let myobj = {
    name:"rohit",
    age: 22,
}
//function
const myFunction = function() {
    console.log("hello world");
}

//********************************** */

/** 
  stack(primitive), heap(non-primitive)
 */
let myYoutubeName = "mr.sangam"
let anotherName = myYoutubeName
anotherName = "hello world"
console.log(myYoutubeName);
console.log(anotherName);

let user = {
    email:"rohitht@gamil.com",
    upi: "pk303@ybl"

}
let userTwo = user
userTwo.email = "user@gmail.com"
console.log(user.email);
console.log(userTwo.email);
