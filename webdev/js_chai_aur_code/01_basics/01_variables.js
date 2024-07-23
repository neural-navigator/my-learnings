// you can't change the the variable declared by using const

const accountId = 512
let accountEmail = "someone@gmail.com"
let accountPassword = "some1@2345"
var accountCity = "New Delhi"

// printing constants
console.log(accountId);

// printing constants in a table
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
let handles scope of variables

- prefer not to use var for block scope and functional scope
- You can declare a variable without let or var. But it's not adviceable.
- You can use (;) or not.
- you can declare a variable without a value, that will be assigned as undefined
- 
*/