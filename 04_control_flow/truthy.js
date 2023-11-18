const userEmail = [] //function(){}

if (userEmail) {
    console.log('Got user email')
} else{
    console.log('Don\'t have user email')
}


// falsy values 
// false, 0, -0, BigInt 0n, '', null, undefined, NaN


// truthy values
//  true, '0', 'false', ' ', [], {}, function(){}


if (userEmail.length===0) {
    console.log('Array is empty')
}
 const emptyObj = {}

 if (Object.keys(emptyObj).length===0) {
    console.log('Object is empty')
}

// Nullish Coalescing Operator(??): null/ undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 12
// val1 = undefined ?? 10
val1 = null ?? 110 ?? 12

console.log(val1)


// Ternary operator

// condition ? true : false

const iceCreamPrice = 100
iceCreamPrice<=80 ? console.log('less than 80') : console.log('more than 80')




