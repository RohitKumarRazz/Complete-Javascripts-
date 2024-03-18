//var c = 300
let a = 300
//{} => scope

if(true){
    let a = 10
    const b = 20
    //var c = 3000
    //console.log("Inner:", a);
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}
//one();


if(true){
    const username = "rohit"
    if(username ==="rohit"){
        const website = "youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


//********INteresting************ */
//console.log(addone(5));  => Exutable
function addone(num){
    return num+1
}
addone(5)

// console.log(addTwo(5));  => Error
const addTwo = function(num){
    return num+2
}
addTwo(5)



