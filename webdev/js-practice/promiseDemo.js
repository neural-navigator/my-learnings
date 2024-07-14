let p = new Promise((resolve, reject) => {
    if (true){
        resolve('success')
    } else {
        reject ('failed')
    }
})


p.then(message => console.log('This is a '+ message))
.catch(message => console.log('this is a '+ message))
