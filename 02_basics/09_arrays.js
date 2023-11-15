const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc = ['superman', 'flash', 'batman']

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const all_heros = marvel_heros.concat(dc)
// console.log(marvel_heros.concat(dc))

// const all_new_heros = [...marvel_heros, ...dc] // ...another array
// console.log(all_new_heros);
// console.log([...marvel_heros, ...dc]);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_array = another_array.flat(Infinity)
const real_array = another_array.flat(1)
// console.log(real_array)

console.log(Array.isArray('hitesh'))
console.log(Array.from({name:'hitesh'})) //interesting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))










