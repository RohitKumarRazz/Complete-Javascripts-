// let myName = "Rohit Kumar     "
// let myAge = "01     "


// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hamer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rohit = function(){
    console.log(`rohit is present in all objects`);
}

Array.prototype.hyRohit = function(){
    console.log(`Rohit say hello`);
}
// heroPower.rohit()
// myHeros.rohit()
// myHeros.hyRohit()
// // heroPower.hyRohit()





////Inheritence

const User ={
    name:"rohit",
    mail:'rohit@google.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__=User

//Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "helloRohit          "
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUser.trueLength()
"rohit".trueLength()







