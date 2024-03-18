// const userEmail = "h@gamil.com"
// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't user email");

// }


// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value

// "0", 'false', " ", [], {}, function(){}
// if(userEmail.length===0){
//     console.log("array is emapty");
// }

const emaptyObj = {}

// if(Object.keys(emaptyObj).length===0){
//     console.log("object is empty");
// }

//Nullish Coalescing Operator(??):null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 20

console.log(val1);

//Ternary Operator

//condition ? ture: false
const icePrice = 100 
icePrice >= 80 ? console.log("less than 80") : console.log("more than 80");


