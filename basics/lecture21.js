// lecture 21 lets goooo

// global scopes and shit

let a = 200

if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}
console.log(a);