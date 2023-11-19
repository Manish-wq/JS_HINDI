// for of

// ['', '', '' , '']

// [{}, {}, {}] ye bht common scenario hai jhn...

// const arr = [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i);
// }

// const greetngs = 'Hello World'

// for (const greet of greetngs) {
//     // console.log(greet);
//     console.log(`Each char is ${greet}`)
// }

//_______________Maps________________________________________

const myMap = new Map()
myMap.set('In', 'India')
myMap.set('USA', 'United States of America')
myMap.set('Fr', 'France')
myMap.set('In', 'India') // ordered and unique value.

// console.log(myMap)

// for (const [key, value] of myMap) {
//     console.log(key, ':-', value)
// }

const myObject = {
    game: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
} //object is not iterable through forOf here.



