

function sayMyName(){
    console.log("r");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}
// sayMyName()
//sayMyName => reference

// function addTwoNum(num1, num2){
//     console.log(num1+num2);
// }
// addTwoNum(3, 4)
// addTwoNum(3, "4")
// addTwoNum(3, "a")
// addTwoNum(3, null)
function addTwoNum(num1, num2){
    // let result = num1+num2;
    // return result;

    return num1+num2
}
const result = addTwoNum(3, 5)
// console.log("Result:", result);

function loginUserMsg(username){
    if(username===undefined){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMsg())

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));

function calculateCartPrices(...num1){
    return num1
}
console.log(calculateCartPrices(2, 4));
function calculateCartPricess(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPricess(2, 4, 6, 7));

const user = {
    username: "rohit",
    price: 199999999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 199
})

const myNewArray = [200, 400, 600, 800]
 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([100, 200, 300, 400]));

