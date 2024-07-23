// for each loop will return nothing

let coding = ["c", "c++", "js", "python"]

const new_lang = coding.filter( (val) => val == "js" ); // if you use {} (scope), you need to return

console.log(new_lang);

// map

let variable = [1,2,3];
let newVar = variable.map((k) => k+10);
// method chaining
let newVar2 = variable.map((k) => k+10).map((i) => i*2);
console.log(newVar2);


// reduce
const myNum = [1, 2, 3, 4, 5, 6, 7];

// const total = myNum.reduce( (accum, num) => accum + num, 0);
const total = myNum.reduce( (accum, num) => accum * num, 1);

console.log(total);