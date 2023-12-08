//singleton
// Object.create()

//Object literals

const mySym = Symbol("key1")

const jsUser = {
    "full name": "dipankar paul",
    [mySym]: "myKey1",
    name: "dipankar",
    age: 25,
    location: "silchar",
    email: "dipankar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);  //dipankar@google.com
console.log(jsUser["email"]);  //dipankar@google.com
console.log(jsUser["full name"]);  //dipankar paul
// console.log(jsUser.full name);  //gives error
console.log(jsUser[mySym]);

jsUser.email = "dipankar@gmail.com"
Object.freeze(jsUser)
jsUser.email = "dipankar@yahoo.com"
console.log(jsUser);
/* 
{
  'full name': 'dipankar paul',
  name: 'dipankar',
  age: 25,
  location: 'silchar',
  email: 'dipankar@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/
jsUser.greeting = function(){
    console.log("Hello jsUser");
}

jsUser.greetingOne = function(){
    console.log(`Hello jsUser, ${this.name}`);
}

console.log(jsUser.greeting);  //undefined
console.log(jsUser.greeting()); 
/* 
Hello jsUser
undefined
*/
console.log(jsUser.greetingOne()); 
/*
Hello jsUser, dipankar
undefined
*/