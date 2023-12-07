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
// console.log(stringNumber);
// console.log(typeof stringNumber);


/*#################################Operations####################################*/

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = " dipankar"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(+true); //1
// console.log(true+); //Error
// console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 4
// console.log(num1,num2,num3);

let gameCounter = 100
console.log(gameCounter++); //100
console.log(++gameCounter); //102

/*
document link:
https://tc39.es/ecma262/#sec-abstract-operations
*/