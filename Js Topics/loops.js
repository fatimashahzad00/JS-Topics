// Syntax:
// for (expression 1; expression 2; expression 3) {
//     code block to be executed
//   }
  
// FOR LOOP
// increment
// Example 1
// for(i = 0; i < 3; i++) {
//       console.log("Hello" );
// }

// Example 2
// for(i = 0; i < 3; i++) {
//     console.log(i);
//       console.log("Hello" + 1);
// }

// Example 3
// for(i = 0; i < 3; ) {
//       console.log("Hello" ); // it will print infinite
//       i++;
// }

//  and if we remove i++ so it will not stop increment

// decrement
// Example 1
// for(i = 0; i < 6; i--) {
    //   console.log("Hello" ); // it will execute infinite
// }

// Example 4
// let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawer"]
// console.log(cleanestCities);S

// it will print array cities
// for(i = 0; i <= 3; i++) {
//  console.log(cleanestCities[i]); 
// }

// Example 5
// let cleanestCities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawer']
// for(let i = 0; i <= 3; i++) {
//     // console.log(cleanestCities);
//     if("islamabad" === cleanestCities[i]) {
//         console.log("It's one of the cleanest cities");
//         break;
//     } 
// }

// Example 6
let cleanestCities = ['Karachi', 'Lahore', '', 'Peshawer'];

let matchFound = "no";

for(let i = 0; i <= 4; i++) {
    if("Islamabad" === cleanestCities[i]) {
        matchFound = "yes";
        console.log("It's one of the cleanest cities");
    }
}

if(matchFound === "no") {
    console.log("it's not on the list");
}


// Example 7
// let cleanestCities = ['karachi', 'lahore', 'islamabad', 'peshawer']

// let numElements = cleanestCities.length;
// let matchFound = false;
// console.log(numElements);

// for(let i = 0; i < numElements; i++) {
//     if ("islamabad" === cleanestCities[i]) {
//         matchFound = true;
//         console.log("it's one of the cleanest cities");
//         break;
//     }
// }

// if (matchFound === true) {
//     console.log("it's not on the list");
// }