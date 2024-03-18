// singleton

//object literals

// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name:"rohit",
    "fullName" : "Rohit Kumar",
    age: 21,
    [mySym]: "key1",
    location: "email",
    email: "rohit@google.com",
    isLoggedIn:false,
    lastLoginDays: ["monday", "saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]);


jsUser.email = "rohit@tot.com"
// Object.freeze(jsUser)
jsUser.email = "rohit@tummft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());