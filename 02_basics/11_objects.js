// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Manish',
            lastName: 'Rajput'
        }
}
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 ={3: 'c', 4: 'd' }
const obj4 = {5: 'e', 6: 'f'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = Object.assign(obj1, obj2, obj4) 
// console.log(obj1)


// console.log(obj3)
// console.log(obj2)
// console.log(obj4)

// const target = {a:1, t:2}
// const source = {b: 4, c: 5}

// const returnTarget = Object.assign(target, source)
// console.log(returnTarget)
// console.log(target)

// console.log(returnTarget===target)

const obj3 = {...obj1, ...obj2, ...obj4} // done through spread operator.
console.log(obj3)

const users = [
    {
        id:1,
        email: 'hc@gmail.com'
    },
    {
        
        id2:1,
        email2: 'hc@gmail.com'
    }
]

console.log(users[1].email2)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

//______________object_deStructuring______________

const course = {
    courseName: 'Js in Hindi',
    price: 999,
    courseInstructor: 'Manish'
}

// console.log(course['courseInstructor']);
// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: tutor} = course

// console.log(courseInstructor)

console.log(tutor)

//JSON Structure
// {
//     'name': 'Manish',
//     'courseName': 'Js in Hindi',
//     'price': 'free'
// }

// Sometimes we get APIs in format of arrays.

[
    {},
    {},
    {}
]