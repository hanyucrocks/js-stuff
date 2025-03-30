// lecture 22 lets gooo

// scope level and mini hoisting

// nested scope

// function one(){
//     const user = "agnish"
//     function two(){
//         const website = "youtube"
//         console.log(user);
//     }
//     // console.log(website); // ye kaam nahi karega
//     two()
// }

// one()

if(true){
    const user = "jasmine"
    if(user === "jasmine"){
        const website = " youtube"
        // console.log(user+website);
    }
    // console.log(website);
}
// console.log(user);

// ----------------------------------------- interesting....----------------

// question?

console.log(addone(4))
function addone(num){
    return num+1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4))