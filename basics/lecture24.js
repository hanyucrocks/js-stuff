// lecture 24 letss gooo

//IIFE immediately invoked function expressions.

// jaise hi start ho waise hi chalu ho jaye

(function chai(){
    console.log(`DB CONNECTED`);
})(); // ye run hogya

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('jazz') // first wala () definition, second wala () execution