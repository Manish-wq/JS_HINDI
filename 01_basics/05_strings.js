 const name = 'hitesh'
 const repoCount = 50

//  console.log(name+ repoCount+' Value')

console.log(name[3]);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('manish_hc_com_g')

console.log(gameName[0]);
console.log(gameName[1]);

console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3)); //gives the index of specified characters.
console.log(gameName.indexOf('i')) 

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = '  hitesh   '

console.log(newStringOne)
console.log(newStringOne.trim());

//trimstart trimend

const url = 'https://hitesh.com/hitesh%20chaudhary'
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('%20'))

console.log(gameName.split('_'))