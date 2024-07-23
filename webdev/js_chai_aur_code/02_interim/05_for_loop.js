// for loop
// for(let i=0; i<10; i++){
//     console.log(i);
// }

// break and continue
for(let i=0; i<10; i++){
    if(i%2==0){
        continue;
    } else if(i>5) {
        break;
    } else {
        console.log(i)
    }
}