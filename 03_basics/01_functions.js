function myname(){
    console.log("Dipankar")
    console.log("Paul")
}

// myname()


function add(number1,number2){      //number1,number2 are parameters
    console.log(number1 + number2)
}

// add(200,300)        //500                //200 and 300 are arguments


function add1(number1,number2){
    return number1 + number2
}

// console.log(add1(200,300));     //500

function loginUserMessage(username = "jay"){
    if (!username){                //(username === undefined)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("dipankar"));      //dipankar just logged in
// console.log(loginUserMessage());        //undefined just logged in

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500));       //200

function calculateCart(...num1){            // ... is rest operator
    return num1
}

// console.log(calculateCart(200,400,500));        //[ 200, 400, 500 ]

function calculate(val1,val2,...num1){           
    return num1
}

// console.log(calculate(200,400,500));  //500
//**************************************************************************//
const user = {
    username: "dipankar",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)          //Username is dipankar and price is 99
handleObject({
    username: "dip",
    price: 199
})              //Username is dip and price is 199

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));     //300