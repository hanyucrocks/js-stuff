// lecture 30 lets goo

// const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values); // return undefinied

// foreach koi bhi value return nahi karta

// numberzzzz

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// const userBooks = books.filter( (bk) => bk.genre === 'History')


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) =>{ return num + 10 })

// const newNums = myNumers.map((num) => num * 10)
//     .map((num) => num+1)
//     .filter( (num) => num >= 40)

// console.log(newNums);

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, 0)


const myTotal = myNums.reduce((acc, curr) => acc+curr, 0);

console.log(myTotal);

const shoppingCar = [
    {
        itemName: "js course", 
        price: 2999
    },
    {
        itemName:"pythong course",
        price: 1999
    }
]

const pricetopay = shoppingCar.reduce((acc, item) => acc + item.price, 0);

console.log(pricetopay);
