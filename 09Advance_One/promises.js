const promiseOne = new Promise(function(resolve, reject){
    //do an async task 
    //Db calls , cryptography, newtwork
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 2000)
})
promiseOne.then(function(){
    console.log("promises completed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task2 is completed');
        resolve()
    },2000)
}).then(function(){
    console.log('promises task2 is completed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usernam:"rohit", email: "rohithestar2003@gamil.com"})
    }, 2000)
    
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    let error = true
    setTimeout(function(){
        if(!error){
            resolve({username:"rohit", email: "rohithestar2003@gamil.com"})
        }
        else{
            reject('ERROR , Something went Wrong')
        }
    }, 3000)
})
promiseFour.then((user) =>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('the Promises either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    let error = true
    setTimeout(function(){
        if(!error){
            resolve({username:"javascript", password:"123456"})
        }
        else{
            reject('js , Something went Wrong')
        }
    }, 3000)
})

async function consumedProFiv(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumedProFiv()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com.user')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com.user')
.then((response) =>{
    return response.json()
}).then((data) =>{
    console.log(data);
}).catch((error) => console.log(error))


