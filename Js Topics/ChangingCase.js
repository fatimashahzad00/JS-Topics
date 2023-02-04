// let text = "Fatima";
// console.log(text.length);

// let name = "";
// console.log(name.length);

// let cityTocheck = "pakistan";
// let firstChar = cityTocheck.slice(0, 1);
// console.log(firstChar.toUpperCase());

// let cityTocheck = "pakistan";
// let firstChar = cityTocheck.slice(0, 1).toUpperCase();
// console.log(firstChar);


// let cityTocheck = "pakistan";
// let firstChar = cityTocheck.slice(-1).toUpperCase();
// console.log(firstChar);


// EXAMPLE 1
// let cityTocheck = "australia";

// let firstChar = cityTocheck.slice(0,1); //a
// let otherChar = cityTocheck.slice(1); //ustralia
// firstChar = firstChar.toUpperCase(); //A
// Chars = otherChar.toLowerCase(); //ustralia
// let cappacity = firstChar + otherChar; // Australia
// console.log(cappacity);


//EXAMPLE 2
let month = prompt("Enter a month");
let charInmonth = month.length;
if (charInmonth > 3) {
    monthAbbrev = month.slice(0,3)
}
console.log(monthAbbrev);