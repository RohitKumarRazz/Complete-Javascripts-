const myCricketers = ["ROhit", "virat", "dhoni"]
const dc = ["superman" , "flash", "batman"]
/*
myCricketers.push(dc)
// console.log(myCricketers);
// console.log(myCricketers[3][1]);

const allname=myCricketers.concat(dc)
console.log(allname);*/
const allNew = [...myCricketers, ...dc]
// console.log(allNew);

const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArray = another.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("rohit"));
console.log(Array.from("rohit"));
console.log(Array.from({name:"rohit"}));

let score1 = 100;
let score2= 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));