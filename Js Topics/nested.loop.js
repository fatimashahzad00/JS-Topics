let firstNames = ['BlueRay', 'Upchunk', 'Lojack', 'Gismo', 'Do-Rag'];
let lastNames = ['Zzz', 'Burp', 'Dogbone', 'Droop'];
let fullNames = [];

for(let i = 0; i < firstNames.length; i++) {
    // console.log(firstNames[i]);
    for (let j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
        // console.log(fullNames);
    }
}