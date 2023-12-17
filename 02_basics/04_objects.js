const tinderUser = new Object()  //singleton Object
const tinderUser1 = {} //Non Singleton Object OR Object Literal
console.log(tinderUser); //{}
console.log(tinderUser1);  //{}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser); //{ id: '123abc', name: 'sam', isLoggedIn: false }

const regularUser = {
    email: "some@google.com",
    fullName: {
        userFullName:{
            firstName: "dipankar",
            lastName: "paul"
        }
    }

}
console.log(regularUser.fullName); 
//{ userFullName: { firstName: 'dipankar', lastName: 'paul' } }
console.log(regularUser.fullName.userFullName.firstName); //dipankar

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}

console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1, obj2, obj4) 
// {} --> target , obj1, obj2, obj4 --> source
console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1,...obj2}
console.log(obj6);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "d@google.com"
    },
    {
        id: 2,
        email: "s@google.com"
    }
]

console.log(users[1].email);  //s@google.com

console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //[ '123abc', 'sam', false ]
console.log(Object.entries(tinderUser)); 
//[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //true
console.log(tinderUser.hasOwnProperty("isLogged"));  //false

const course = {
    coursename : 'javascript',
    price : '999'
}

// console.log(course.coursename)

const {coursename: name} = course
// console.log(coursename); //javascript
console.log(name);  //javascript


//JSON = JavaScript Object Notation

// {
//     "name":"dipankar",
//     "course":"btech"
// }


[
    {},
    {},
    {}
]
// APIs are in JSON format