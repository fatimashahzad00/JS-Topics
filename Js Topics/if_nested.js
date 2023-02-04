// NESTED IF

// Tickets system
// let country = prompt('where do you live?')
// // Number() is used to convert string into number
// let age = Number(prompt('what is your age?'))

// if(country === 'pakistan') {
//      if (age >= 18) {
//         console.log('here is your ticket');
// }
// } else {
//     console.log('Invalid country');
// }


// let country = prompt('where do you live?')
// // Number() is used to convert string into number
// let age = Number(prompt('what is your age?'))

// if(country === 'pakistan') {
//      if (age >= 18) {
//         console.log('here is your ticket');
//      } else {
//         console.log('Age restricted')
//      }
// } else {
//     console.log('Invalid country');
// }



let country = prompt('where do you live?')
// Number() is used to convert string into number
let age = Number(prompt('what is your age?'))

if(country.toLowerCase() === 'pakistan') {
     if (age >= 18) {
        console.log('here is your ticket');
     } else {
        console.log('Age restricted')
     }
} else {
    console.error('Invalid country');
}