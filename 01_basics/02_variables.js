const accountId = 123
let accountEmail = 'manish@google.com'
var accountPwd = '12345'
accountCity = 'Jaipur'
let accountState;


// accountId = 2         not allowed, TypeError: Assignment to constant variable.
// console.log(accountId);

/*prefer not to use var 
because of issue in block scope and functional scope*/

accountEmail='hc@hc.com'
accountPwd='121212'
// accountCity='Bengaluru'

console.table([accountId, accountEmail, accountPwd, accountCity, accountState])





