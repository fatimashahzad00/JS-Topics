const date = new Date(); //Wed Nov 16 2022 06:05:01 GMT-0800 (Pacific Standard Time
console.log(date);

const dated = new Date();
console.dir(dated);

let currentMonth = date.getMonth();
console.log(currentMonth);

let dayOfMonth = date.getDay();
console.log(dayOfMonth);

let dateOfDay = date.getDate();
console.log(dateOfDay);

let currYr = date.getFullYear();
console.log(currYr);

let currentHrs = date.getHours();
console.log(currentHrs);

let currentMinu = date.getMinutes();
console.log(currentMinu);

let currentSec = date.getSeconds();
console.log(currentSec);

let currMills = date.getMilliseconds();
console.log(currMills);

let millsSince = date.getTime();
console.log(millsSince);