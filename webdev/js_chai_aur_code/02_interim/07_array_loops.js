// const arr = [1,2,3,4,5];

// for(let num of arr){
//     console.log(num);
// }

// const greetings = "Hello World!"
// for(const greet in greetings){
//     console.log(`each char is ${greet}`);
// }


//map

const map = new Map();
map.set("IN", "India");
map.set("en", "English");

for(let item of map){
    console.log(item);
}

for(let [k, v] of map){
    console.log(k, v);
}

let languages = {
    js: "Javascript",
    cpp: "c plus plus"
}
// it's not a of loop, it's a in loop
for(const item in languages){
    console.log(item);
}

for(const item in languages){
    console.log(item, languages[item]);
}



for(const item in languages){
    console.log(item);
}

// of iterate element, in iterate index in array and string
const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`each char is ${greet}`);
}

const coding = ["c", "c++", "js", "python"];
coding.forEach(function func(item){
    console.log(item);
})

coding.forEach((v) => {
    console.log(v[0]);
})

// coding.forEach(func_name)

coding.forEach((item, index, ls) => {
    console.log(item, index, ls);
})