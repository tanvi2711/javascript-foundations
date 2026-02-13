const accountId=123456   //const= constant value
let accountEmail="tanvi@gmail.com"  // in js let n var use for variable declaration but let is mostly used bcoz var has scope problem 
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=3454546  // Not allowed 

accountEmail="tanvi1@gamil.com"
accountPassword="32432"
accountCity="Delhi"


/* 
    prefered not to use var  
    because of issue in block scope and functionala scope
*/

console.log(accountId);

//console.table([var1,....,varN]) heps to print data in tabular format
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])