//for Each 

const prog = ["js", "java", "py", "rb"]
prog.forEach( function (item) {
    //console.log(item);
} )

prog.forEach( (item) => {
    //console.log(item);
})

// function printMe(item){
//     console.log(item);
// // }
// prog.forEach(printMe)

prog.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        languageN: "javascript",
        languageFN: "js"
    },
    {
        languageN: "java",
        languageFN: "java"
    },
    {
        languageN: "python",
        languageFN: "py"
    },
    {
        languageN: "ruby",
        languageFN: "rb"
    },
    

]

myCoding.forEach((item) => {
    console.log(item.languageN);
    console.log(item.languageFN);
})





