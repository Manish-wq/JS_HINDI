 //Primitive 


 //7 types: String, Number, Boolean, Null Undefined, Symbol, bigint
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// let userEmail= undefined, manually bhi undefined kr skte hain.

const Id = Symbol('123')
const Id2 =Symbol('123')
console.log(Id===Id2)

const bigNumber = 123344343534345543n


 // Reference type (Non primitive)

//  Arrays, Objects, functions

const heros = ['shaktiman','naagraj','doga'];

let myObj={
    name:'Manish',
    age: 23,
    location: 'Noida'

}

const myFn = function(){
console.log('Hello World');
}

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)
// console.log(typeof myFn)
// console.log(typeof myObj)
// console.log(typeof heros)
// console.log(typeof Id)



// _____________________Memory_types_____________________

// Stack(primitive)   Heap(Non Primitive)

let myYoutubeName = 'hiteshchaudhary.com'

let anotherName = myYoutubeName
anotherName = 'chai_aur_code'

// console.log(myYoutubeName)
// console.log(anotherName)

let userOne = {
    email: 'user@google.com',
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = 'mani@google.com'

console.log(userOne);
console.log(userTwo);

