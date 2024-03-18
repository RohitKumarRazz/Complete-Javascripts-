
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart =[
    {
        name: "js course",
        price: "999"
    },
    {
        name: "java course",
        price: "1999"
    },
    {
        name: "python course",
        price: "6699"
    },
    {
        name: "android course",
        price: "9999"
    },
]

const priceToPay = shoppingCart.reduce( (acc, item)  => acc+item.price, 0)
console.log(priceToPay);

