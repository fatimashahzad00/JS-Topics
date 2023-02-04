// Splice Method add an element into an array in middle or delete any element

const fruits = ["banana", "orange", "apple", "mango"];
fruits.splice(2,1, 'lemon', 'kiwi')
console.log(fruits);


// Slice method
const fruits1 = ["banana", "orange", "lemon", "apple", "mango"]
// const citrus = fruits1.slice(1);
const citrus = fruits1.slice(2, 3);
console.log(citrus);