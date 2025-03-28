//lecture 13 letss go, cc with s <3 date and time in depth

// date and times in js

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2025, -1, 1);
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'hour12'
})