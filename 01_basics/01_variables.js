const accountId = 144553        //values cannot be changed
let accountEmail = "dipankar@google.com"
var accountPassword = "12345"
/*
Prefer not to use 'var'
because of issue in block scope and functional scope
*/
accountCity = "Silchar"         //variable can be declared this way but not preferred
let  accountState



// accountId = 2; not allowed-const cannot be changed

accountEmail = "paul@google.com"
accountPassword = "789456123"
accountCity = "Pune"

console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])