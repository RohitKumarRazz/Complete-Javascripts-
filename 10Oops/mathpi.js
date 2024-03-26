const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);




const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, vlaue] of Object.entries(chai)){
if(typeof vlaue !== 'function' ){
    console.log(`${key} : ${vlaue}`);
}
    
}


