/* primitive 
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 3988426562165595624846262n //BigInt --> put n at end



/* non primitive/reference type
Array, Object, Function 
*/

const heros = ["Iron Man", "Thor", "krishh"]

let myObj = {
    name: "dipankar",
    age: 25
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber) //bigint
console.log(typeof null); //object
console.log(typeof myFunction); //function or object function
console.log(typeof anotherId); //symbol

/*
document link:
https://tc39.es/ecma262/#sec-typeof-operator
*/