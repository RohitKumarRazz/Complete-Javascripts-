const user = {
    username: "rohit",
    price: 999,

    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMsg()

// user.username = "sam"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let username="rohit"
//     console.log(this.username);
// }
// chai()

// const chai  = function(){
//     let username = "rohit"
//     console.log(this.username)
// }


const chai  = () => {
    let username = "rohit"
    console.log(this)
}

//chai()

// const addTwo= (num1, num2) => {
//     return num1+ num2
// }

//const addTwo= (num1, num2) => num1+ num2
// const addTwo= (num1, num2) => (num1+ num2)

const addTwo= (num1, num2) => ({username: "rohit"})

console.log(addTwo(4, 5));



const myArray = [1, 2, 3, 4]
// myArray.forEach(())




