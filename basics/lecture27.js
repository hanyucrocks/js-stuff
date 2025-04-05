// lecture 27 letss go

// for loop with break and continue

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5) console.log("5 is best number");
//     console.log(element);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j = 1; j <= 10; j++){
//         //console.log(`Inner loop value ${j} and Inner loop value ${i}`);
//         console.log(i + '*' + j + ' = ' + i * j);
//     }
// }

// let myArr = ["jasmine", "claire", "dallas"]

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
// }

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5, get out!`); continue;
    }
    console.log(`Value of i is ${i}`)
}