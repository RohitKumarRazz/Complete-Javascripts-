function multupleBy5(num){
    return num*5
}
multupleBy5.power = 2
console.log(multupleBy5(5));
console.log(multupleBy5.power);
console.log(multupleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const rohit = new createUser("rohit", 9)
const ankit = new createUser("ankit", 99)

rohit.printMe()
ankit.printMe()

