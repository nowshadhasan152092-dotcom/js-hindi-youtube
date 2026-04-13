const accountId = 144553
let accountEmail = "nowshad@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountStates;

//accountId = 2 // not allowed

accountEmail = "nowshad@gmail.com"
accountPassword = "1234"
accountCity = "janki"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountStates])