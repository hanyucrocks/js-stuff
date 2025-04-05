// lecture 26 lets go

// basics over, now a bit more intermediate

// control flow

// if, true then code execute hoga, false then execute hi nahi hoga
// if(2==="2"){
//     console.log("executed");
// }

const Temp = 41

// if(Temp < 50){
//     console.log("temp less than fifty ni");
// }
// const score = 300
// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Marchhh");
//         break;
//     case 4:
//         console.log("Apr");
//         break;
//     default:
//         console.log("defaulter ugh");
//         break;
// }

const userEmail = ""

// if(userEmail){
//     console.log("got user email");
// }
// else console.log("dont have user");

// falsy values, - false, 0, -0, BigInt = 0, "", null

// truthy value - "0", 'false', [], {}, function(){}

// if(userEmail.length === 0) console.log("Array is empty");

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15

// console.log(val1);
// console.log(var1);

val=null ?? 10 ?? 15
console.log(val); // pehla value is 10. so 10 is output

// terniary operator

// condition ? true : false

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
