// lecture 17 letsss goooo

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Jasmine"

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"amy",
            lastname:"winehouse"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // amy

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2); // {} the empty string is the target and baaki saare are source.
// console.log(obj3);
// const newObj3 = {...obj1, ...obj2};
// console.log(newObj3);

const users = [
    {
        id:1,
        email: "xys"
    },
    {
        id:2,
        email:"asihdb"
    }
]

console.log(Object.keys(tinderUser)); // data type bata dega, array
console.log(Object.entries(tinderUser)); // entry bhi batayega



