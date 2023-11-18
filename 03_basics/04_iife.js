// Immediately invoked function expressions( iife)

(function chai(){
    //named iife
    console.log('DB connected')
})();

( () => {
    console.log('DB connected two ')
})();

( (name) => {
    console.log(`DB connected two ${name}`) //parameterized iife.
})('Manish')


