// lecture 20 letsss gooo

function calcPrice(...num1){ // ... rest operator
    return num1
}
console.log(calcPrice(200, 400, 300)); 

const user = {
    username: "agnish",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);


}
handleObject(user);