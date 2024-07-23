// this keyword
const user = {
    name: "Satya",
    price: 999,

    msg: function(){
        console.log(`Hello ${this.name}`); //this : it represents current context
    }
}

console.log(user.msg());
user.name = "Satya Pati";
console.log(user.msg());

// arrow function
const getName = (name) => {
    console.log(name);
}

// implicit return
const getSum = (a, b) => a + b; // it returns a+b
const getHello = () => ({name: "Satya"}) // the object need to be closed by parenthesis

