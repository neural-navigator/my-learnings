// Objects can be declared in 2 ways, literal and constructor way.

/* 


*/

// const userObject = Object.create(4); // singleton object


// object literal
const userObject2 = {
    name: "Satya",
    age: 28,
    location: "Bhubaneswar"
};

console.log(userObject2.name); // not advisable
console.log(userObject2["location"]); // good way to access

// Object.freeze(userObject2); the object is freezed it can't be changed. It will not give error

userObject2.callMe = function(){
    console.log("Hey! did you call me?")
};

// if you put the callMe method inside a console.log it will print undefined as its not returning anything
userObject2.callMe(); 

const user = {};
user.name = "satya";
user.age = 28;

user.fullName = {
    firstName: "Satya",
    lastName: "Pati"
}

// mergin objects
const object3 = Object.assign({}, user, userObject2); // combine both the objects and create another objects

const object4 = {...object3, ...user};

// methods

// to get all keys
console.log(Object.keys(user)); // get keys
console.log(Object.values(user)); // get values
console.log(Object.entries(user)); // get entries as nested array

console.log(user.hasOwnProperty("is_logged_in"));

// this is another way to get property
const {name} = user;
console.log(name);

// {property: alias} = object
const {name: firstName} = user;
console.log(firstName);

