// Primitive
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp = null
let userEmail;


const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=234153347568436646n


// Reference (Non primitive)
// Arrays , Objects , Functions


// array
const heros=["shaktiman","naagraj","doga"]

// objects
let myObj={
    name:"tanvi",
    age:21,
}

// Function

const myFunction=function(){
    console.log("Hello,world!")
}

console.table([
  { Variable: "score", Value: score, Type: typeof score },
  { Variable: "scoreValue", Value: scoreValue, Type: typeof scoreValue },
  { Variable: "isLoggedIn", Value: isLoggedIn, Type: typeof isLoggedIn },
  { Variable: "outsideTemp", Value: outsideTemp, Type: typeof outsideTemp },
  { Variable: "userEmail", Value: userEmail, Type: typeof userEmail },
  { Variable: "id", Value: id, Type: typeof id },
  { Variable: "anotherId", Value: anotherId, Type: typeof anotherId },
  { Variable: "bigNumber", Value: bigNumber, Type: typeof bigNumber },
  { Variable: "heros", Value: heros, Type: typeof heros },
  { Variable: "myObj", Value: myObj, Type: typeof myObj },
  { Variable: "myFunction", Value: myFunction, Type: typeof myFunction }
]);




// +++++++++++++++++++++++++++++++++MEMORY+++++++++++++++++++++++++++++++

// Stack {primitive} and Heap {non primitive}

// When stack memory is use we get a copy of variable 
// when heap memry is used we get a refrence of original value

let myYoutubeName = "TanviJivatode"
let anotherName=myYoutubeName
anotherName="VibewithTanvi"

console.log(myYoutubeName)
console.log(anotherName)

let userOne={
    email:"user.email.com",
    upi:"user@ybl"
}                                       

let userTwo=userOne

userTwo.email="Tanvi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);