// lecture 29 lets go

// arrays and objects

// const arr =[1, 2, 3, 4, 5]

// // for of

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Do you want me to take it off?"
// for(const greet of greetings){
//     if(greet == " ") continue;
//     console.log(`Each char is ${greet}`);
// }

// Maps, all unique no duplicates

// const map = new Map
// map.set('IN', 'India');
// map.set('US', 'United Stated of America');
// map.set('FR', 'France');
// map.set('FR', 'France'); ye dobara print nahi hoga

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'GTA'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }


// const myObject = {
//     js : 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//    console.log(programming[key]);
// }

// map is not iteratable like that, for in for of

const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function(item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
})

// done