// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        // console.log('5 is best number')
    }
    // console.log(element)
}


//____________loop inside loop_________

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`)
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
    }
}
// _______________________________________________________________________



let myArr = ['Manish', 'Namo', 'Shweta']
// console.log(myArr.length)

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
    // console.log(myArr[i])
    
    
}

//_________break_and____continue____________

for (let i = 1; i <= 20; i++) {
    if (i==5) {
        // console.log('5 detected')
        break;
    }
    // console.log(`Value of i is ${i}`)    
}



for (let i = 1; i <= 20; i++) {
    if (i==5) {
        console.log('5 detected')
        continue;
        
    }
console.log(`Value of i is ${i}`)    
}


