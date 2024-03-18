// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Rohit"
tinderuser.isLoggedIn = false
//console.log(tinderuser);

const regularUser = {
    email: "some@gamilcom.",
    fullname: {
        userfullname: {
            fisrtname: "ROhit",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname?.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1[1], ...obj1[2]}
//console.log(obj3);


const users = [
    {
        id: 1,
        email:"rak@gamil.com"
    },
    {
        id: 1,
        email:"rak@gamil.com"
    },
    {
        id: 1,
        email:"rak@gamil.com"
    },
    {
        id: 1,
        email:"rak@gamil.com"
    }
]
users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js tutorial",
    price:"999",
    courseInstructor: "hitesh"
}
//course.courseInstructor
const {courseInstructor : instructor} = course
console.log(instructor);

// const navbar = ({company}) => {  //De Structuring

// }
// navbar(company = "rohit")

//json
// {
//     "name":"rohit",
//     "coursename":"js complete"
//     "price":"free"
// }

[
    {},
    {},
    {}
]



