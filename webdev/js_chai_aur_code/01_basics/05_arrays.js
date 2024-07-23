// array : can contain multiple types in a single variable. It's a resizeable objects, nested as well. 
/*
1. Index accessed, 0 based indexing.
2. when you make copy, is shallow. 

*/

let myArr = [0, 2, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5);

// methods

myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(7);  // adding 7 as 1st element (0th index)
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.includes(8); // yield a boolean value
myArr.indexOf(10); // if found return index else return -1

let strArr = myArr.join(); // join the array element and create a string
let subArr = myArr.slice(2, 4); // create a list from index 2 to 4 (excluded)

// manupulates the original array, it will create another array from 2 to 4 and left elements will be in the original array
let subArr2 = myArr.splice(2, 4); 

let newArr = subArr.concat(subArr2); // concatenate 2 arrays. It will create a new array without modifying
let newArr2 = [...subArr, ...subArr2]; // will spread the arrays and create a single array. Open all the elements

let nestedArr = [1,2, [3, 4, [5, 6, 7]]];
let spreadArr = nestedArr.flat(Infinity); // break the nested array and make it flat

let strArr2 = Array.from("Satya");
let scoreArr = Array.of(1, 2, 3);

