
function sayMyName(){
    console.log('M');
    console.log('A');
    console.log('N');
    console.log('I');
    console.log('S');
    console.log('H');

}

// sayMyName()

function addTWoNumbers(num1,num2){
    // console.log(num1+num2)
    return num1+num2


}

// addTWoNumbers(4,'77')
// addTWoNumbers(4,'a')
// addTWoNumbers(4,null)

// addTWoNumbers(4,77)

const result =  addTWoNumbers(4,77)
//  console.log('result', result)

function loginUserMessage(username='sam'){
    if(!username){
        console.log('please enter a username')
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Manish'))
// console.log(loginUserMessage('m'))


function calculateCartPrice(val1, val2,...num1){
    return num1
}

//console.log(calculateCartPrice(300, 200, 100, 800))

const user = {
    username: 'hitesh',
    price: 199
}

function handleObject(anyobject){  
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: 'sam',
    price:29
})


const myNewArr = [ 200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr))

console.log(returnSecondValue([2,3,44,5]))



