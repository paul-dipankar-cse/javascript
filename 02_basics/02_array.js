const marvelHeros = ["Iron Man", "Thor", "Captain", "Dr Strange", "Moon Knight"]
const dcHeros = ["Superman", "Batman", "Flash", "Wonder Woman", "Cyborg"]

marvelHeros.push(dcHeros)
console.log(marvelHeros);
/* 
[
  'Iron Man',
  'Thor',
  'Captain',
  'Dr Strange',
  'Moon Knight',
  [ 'Superman', 'Batman', 'Flash', 'Wonder Woman', 'Cyborg' ]
]

*/
console.log(marvelHeros[5][1]);  //Batman

console.log(marvelHeros.concat(dcHeros));
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
/* 
[
  'Iron Man',     'Thor',
  'Captain',      'Dr Strange',
  'Moon Knight',  'Superman',
  'Batman',       'Flash',
  'Wonder Woman', 'Cyborg'
]
*/
const allNewHeros = [...marvelHeros,...dcHeros] 
//takes multiple arguments compared to concat() which takes one argument.
console.log(allNewHeros);

const arrayOne = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArrayOne = arrayOne.flat(Infinity)
console.log(realArrayOne);
/* 
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("dipankar"));  //false
console.log(Array.from("dipankar")); //['d', 'i', 'p', 'a', 'n', 'k', 'a', 'r']

console.log(Array.from({name: "dipankar"})); //[]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]