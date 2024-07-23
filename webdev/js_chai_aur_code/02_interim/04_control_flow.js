// if statement => scope is inside braces

// if(true){
//     console.log("True that!");
// }

// if (2==="2"){
//     console.log("Not same!");
// }

if (2=="2"){
    console.log("value same!");
} else {
    console.log("Not same!");
}

if(true) console.log("Hello"); // implicit scope

const bal = 200;

if(bal < 500){
    console.log("do this");
} else if(bal > 100){
    console.log("do that");
} else {
    console.log("do nothing!");
}

/* Operators

Falsy values: false, 0, -0, 0n (bigint), "", null, undefined, NaN
Truth values: which is not false and "0", "false", " ", [], {}, function(){}

Nullish collision operator: ??
Ternary opreator: ? => condition ? true : false



Logical And: &&
Logical OR: ||

Switch case

switch(key){
    case value:
        do this
    case value2:
        do this
}

*/
const month=3;

switch(month){
    case 1:
        console.log("January");
        // break;
    case 2:
        console.log("February");
        // break;
    case 3:
        console.log("March");
        break;
}