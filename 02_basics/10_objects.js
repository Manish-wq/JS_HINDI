// singleton 
// Object.create


//object literals

const mySym = Symbol('key1')

const JsUser = {
    name: 'Hitesh',  //by default name is treated as 'name' by system.
    'ful name': 'Manish Rajput',
    [mySym]: 'mykey1',
    age: 23,
    location: 'Noida',
    email: 'mani@microsoft',
    isLoggedIn: false,
    lastLoginDays: ['Mon','Tue']

}

// console.log(JsUser.email)
// console.log(JsUser['email']) //must be as string
// console.log(JsUser["ful name"])

// console.log(JsUser[mySym])

JsUser.email = 'manish@TimeGPT.com'
// Object.freeze(JsUser)
JsUser.email = 'manish@gpt.com'

// console.log(JsUser)


JsUser.greeting = function(){
    console.log('Hello JsUser')
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
