function hello(){
    console.log("Hello World!");
}

hello();

// inputs while defining params
function addNum(num1, num2){
    return num1 + num2;
}

// while calling it's arguments
addNum(4, 5);

// default argument is available in js

/* Type of parameters
1. func(p1, p2, ...p3){
    return p3
}

func(1,2,3,4,5,6,7) => p1 = 1, p2 = 2, p3 = [3, 4, 5, 6, 7]

*/