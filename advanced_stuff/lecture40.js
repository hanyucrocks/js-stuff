// promises, kya hua tera vaadaah
// object hai ye
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Dallas", email: "dallas@roofer.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "dallas", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either fulflilled or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try{
//         const response = await fetch()
//     }
// }

// getAllUsers()

fetch('https://google.co.in')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))