const names = ["Sakib", "Rahim", "Karim"];

names.sort();

// console.log(names);
// ["Karim", "Rahim", "Sakib"]
const numbers = [100, 5, 25, 80];

numbers.sort((a,b) => { 
    console.log([a, b, a - b < 0 ?  "-": "+"], );
    return a - b;
});

console.log(numbers);
// [100, 25, 5, 80] ❌