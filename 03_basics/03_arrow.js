const user = {
    username: "dipankar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "dip"
// user.welcomeMessage()

// console.log(this); //{}

function anything(){
    console.log(this);
}

// anything()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
*/

function anything1(){
    let username = "dipankar"
    console.log(this.username);
}
// anything1()     //undefined


// const tea = function(){
//     let username = "dipankar"
//     console.log(this.username);
// }

// tea()           //undefined

const tea = () => {
    let username = "dipankar"
    console.log(this.username);
    console.log(this)
}

// tea()       
//undefined
//{}

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2   //implicit return
// const addTwo = (num1,num2) => ( num1 + num2 )
const addTwo = (num1,num2) => ({username: "dipankar"})
console.log(addTwo(3,5))