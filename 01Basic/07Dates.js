//dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 23)
//let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// let myCreatedDate = new Date("2024-03-13")
let myCreatedDate = new Date("13-03-2024")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()));

let newDate = new Date()
console.log(newDate.getMonth);

newDate.toLocaleString('default', {
    weekday: "long" 
})