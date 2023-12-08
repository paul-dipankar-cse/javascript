const myArr = [1,2,3,4,5]
console.log(myArr[0]); //1
console.log(myArr["one"]); //undefined

myHeros = ["Ironman", "Captain"]
const myArr1 = new Array(1,2,3,4,5)

/* Array Methods */

myArr.push(6)
console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]
myArr.push(7)
console.log(myArr);  //[1, 2, 3, 4, 5, 6, 7]
myArr.pop()
console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]

myArr.unshift(0) //Inserts new elements at the start of an array.
console.log(myArr);
/*
[
  0, 1, 2, 3,
  4, 5, 6
]
*/
myArr.shift()  //Removes the first element from an array and returns it.
console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]

console.log(myArr.includes(9));  //false
console.log(myArr.indexOf(3));  //2

const newArr = myArr.join()
console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]
console.log(newArr);  //1,2,3,4,5,6 (type --> string)

/* Slice and Splice */

console.log("A ", myArr);  //A  [ 1, 2, 3, 4, 5, 6 ]

const myNewArr1 = myArr.slice(1,3)
//Takes elements from the original array using index and puts the elements to the new array
console.log(myNewArr1);  //[ 2, 3 ]
console.log("B ",myArr);  //B  [ 1, 2, 3, 4, 5, 6 ]

const myNewArr2 = myArr.splice(1,3) 
//Removes elements from the original array using index and puts the removed elements to the new array
console.log(myNewArr2);  //[ 2, 3, 4 ]
console.log("C ",myArr);  //C  [ 1, 5, 6 ]