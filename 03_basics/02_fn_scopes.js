// var c = 300
let a = 200


if(true){
    let a = 10
    const b = 20
    // var c = 30
    c = 30 // ye aise bhi accessible hai bhar.
    console.log('Inner', a)

}

console.log(a)
// console.log(b)
console.log(c)

function one(){
    const username = 'Manish'

    function two(){
        const website = 'Youtube'
        console.log(username)
    }
    // console.log(website)

    // two()

}

// one()


if (true) {
    const username = 'Manish'
    if (username==="Manish") {
        const website = ' Youtube'
        console.log(username + website)
        
    }
    // console.log(website)

    
}
// console.log(username)


// ___________________________________________________________

console.log(addOne(5))

function addOne(num){
    return num+1
}


addTwo(5)
const addTwo = function(num){
    return num+2
}


