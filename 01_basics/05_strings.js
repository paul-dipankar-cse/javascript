const name = "dipankar"
const repoCount = 50

//console.log(name + repoCount+ " Value"); //outdated(not a good way)

//String Iterpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('dpunkr-cse')
/*
String {'dpunkr'}
0: "d"
1: "p"
2: "u"
3: "n"
4: "k"
5: "r"
length: 6
[[Prototype]]: String
[[PrimitiveValue]]: "dpunkr"
*/

// console.log(gameName[0]);
// console.log(gameName.__proto__); // shows methods 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4) 
//substring doesn't considers negative number
// console.log(newString);

const anotherString = gameName.slice(-9,4)  //slice considers negative number
// console.log(anotherString);

const newStringOne = "     Dipankar     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://dipankar.com/dipankar%20paul"
// console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'));
console.log(gameName.split('-'))