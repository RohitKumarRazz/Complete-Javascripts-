const name = "Rohit"
const repoCount = 30
console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rohit-kr')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStr = "   rohit     "
console.log(newStr.trim());

const url = "https://www.rohitkumar.com/rohit kumar"
url.replace('', '_')
console.log(url);

console.log(gameName.split('-'));