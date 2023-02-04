// function greetingll


// function greetingMsg() {
//     console.log("Fatima, Welcome to our Website");
// }

// greetingMsg();
// greetingMsg();
// greetingMsg();
// greetingMsg();

// Functions - Parameters and arguments
// function showGreet(name) {
//     console.log(name + ", Welcome to our Website");
// }
// showGreet("Fatima");
// showGreet("Shahzad");

// Function - RETURN
// function showGreet(name) {
//     return `${name}, Welcome to our Website`
// }
// let greetingMsg1 = showGreet("Fatima")
// let greetingMsg2 = showGreet("Ali")

// console.log(greetingMsg1);
// console.log(greetingMsg2);


// function addTwoNumbers(x, y) {
//     let result = x + y
//     return result
// }
// let result = addTwoNumbers(363,276)
// console.log(result);
// if (result > 100) {
//     console.log("Big Number");
// }


// Default or unsuitable parameters
function greeting(name = "Hello") {
    console.log(`${name}, Welcome to our Website`);
}

greeting()
greeting("Fatima")