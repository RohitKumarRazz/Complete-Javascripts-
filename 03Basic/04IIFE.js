//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //name IIFE
    console.log(`DB CONNECT`);
})();
// chai()


( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('rohit')





