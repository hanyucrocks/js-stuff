// prototype
// goal

 let myName = "Jasmine"

 console.log(myName.length);

 let people = ["jasmine", "dallas"]

 let heroPower = {
    jasmine: "brunette",
    dallas: "blonde",

    getPower: function(){
        console.log(`Dallas is ${this.dallas}`);
    }
}

Object.prototype.amy = function(){
    console.log("dallas is present in all objects");
}

// heroPower.amy(); 
// people.amy() 

// inheritance

const User = {
    name: "chai",
    email: "mamsd",
}

const teacher ={
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAsssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername =  "ChaiaurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherUsername.trueLength();