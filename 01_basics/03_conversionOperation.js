let score = "33"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);


let score1 = true   
/*
"33" --> 33
"33abc" --> NaN
true/false --> 1/0
*/
let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);


let isLoggedIn = "dipankar"
/*
1/0 --> true/false
"" --> false
"dipankar" --> true
*/
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);