/* Data Types 

Data types are divided into primitive and non primitive data types. 
How it's stored in memory and how it's accessed based on that there are 2 data types

1. Primitive: 7 categories, call by value. Changes are done to a copy, not to the original values (string, null, undefined, number, boolean, symbol, Bigint)
2. Non primitive: reference type. call be reference. (Arrays, objects, functions, Symbol)
*/

// Symbol: even if the values are same the data is not same

let userId = Symbol(123);
let userId2 = Symbol(123);

console.log(userId == userId2);

const bigInt = 1222233434343545454534n;

// list
let heros = ["shaktiman", "Ironman", "nagraj", "doga"]


// object

let myObj = {
    age: 28,
    name: "Satya Pati",
    profession: "Software developer"
}

// function: the typeof myFunc will be function (object function)
const myFunc = function(){
    console.log("Hello World!");
}

// use backticks to get place holders
let name = "Satya";
console.log(`Hello ${name}!`);

// string is a object with attributes and methods

console.log(name.length);
console.log(name.toUpperCase()); // make it upper case
console.log(name.charAt(2)); // will return a character at index 2
console.log(name.indexOf('P')); // get the index of 'p', if not found will return -1
console.log(name.slice(-5, 4)); // get a sub string, will reverse if get -ve number like python
console.log(name.substring(0, 4)); // get a sub string, it will not accept negative values as index

console.log(name.trim()); // will remove start and end spaces
console.log(name.replace("S", 's'));

console.log(name.includes("Pati")); // whether pati is there or not in name
console.log(name.split("-")); // split based on spaces


// Numbers and methods

let accBalance = 123.445
console.log(accBalance.toFixed(1)); // after the decimal point
console.log(accBalance.toPrecision(2)); // number of digits to consider, counted from the left
console.log(accBalance.toLocaleString('en-IN'));

// Math Library

console.log(Math.abs(-4));
console.log(Math.round(44.55)); // floor, ceil is also available
console.log(Math.min([2,3,4,5])); // Math.max is also available, 

// Math.random - always yields values from 0 to 1

// Dates
let myDate = new Date(2023, 10, 8); // month start from 0, date is not
let myDate1 = new Date("01-14-2023");
console.log(myDate1);
console.log(myDate1.toDateString());
console.log(myDate1.toISOString());
console.log(typeof myDate);

let customDate = myDate.toLocaleString("default", {
    weekday: "long"
})


