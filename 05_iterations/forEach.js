const coding = ['js', 'ruby', 'java', 'py', 'cpp']


// coding.forEach(function(item){ 
//     console.log(item);
// })

//_____through Arrow function____________

// coding.forEach((item)=>{ 
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);

// })

const myCoding = [
    {langaugeName: 'JavaScript',
    langaugeFileName: 'Js'
    },
    {langaugeName: 'Python',
    langaugeFileName: 'Py'
    },
    {langaugeName: 'Java',
    langaugeFileName: 'Jv'
    },
    {langaugeName: 'Assembly',
    langaugeFileName: 'ass'
    },
]

myCoding.forEach((item)=>{
    console.log(item.langaugeName);

})

 
