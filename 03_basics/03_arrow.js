const user = {
    username: 'Manish',
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)

    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = 'Manish'
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = 'Manish'
//     console.log(this.username)
// }

// chai()


// const chai = ()=>{
//     let username = 'Manish'
//     console.log(this)
// }

// chai()



// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// const addTwo = (num1, num2) => num1+num2  implicit return
// const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({username: 'Hitesh'})



console.log(addTwo(3,5))


// const myArray = [2, 3, 5, 7]

// myArray.forEach