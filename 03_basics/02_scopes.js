// var c =300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner",a);  //Inner 10
    // var c = 30
}

console.log("Outer",a);     //Outer 300
// console.log(b);
// console.log(c); //30 ["c" is under if then also it will be accessed from outside as it is defined as "var"]

function one(){
    const username = "dipankar"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    //error as website is not in scope of function one
    two()
}

one()

if(true){
    const username = "dipankar"
    if (username === "dipankar"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  //error as website is not in scope
}
// console.log(username);  //error as website is not in scope



// ********************************************************************* //

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)