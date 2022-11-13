//Map -Create a new array by doing something with each item in an array.

// let numbers = [3, 56, 2, 48, 5];

// function double(number) {
//   return number * 2;
// }

// const doubleNumbers = numbers.map(double);

// OR a shorter version:
// const doubleNumbers = numbers.map((number) => {
//   return number * 2;
// });

// console.log(doubleNumbers); [6, 112, 4, 96, 10];

// VS ForEach********************
// const newNumbers = [];
// numbers.forEach((number) => {
//   newNumbers.push(number * 2);
// });

// __________________________________________________________________________________

//Filter - Create a new array by keeping the items that return true.

// let numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.filter((number) => {
//   return number > 10;
// });

// console.log(newNumbers); [48, 56]

// VS ForEach********************
// let newNumbers = [];
// numbers.forEach((number) => {
//   if (number < 10) {
//     newNumbers.push(number);
//   }
// });

// __________________________________________________________________________________

//Reduce - Accumulate a value by doing something to each item in an array.
// let numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.reduce((accumulator, currentNumber) => {
//   return accumulator + currentNumber;
// });

// console.log(newNumber); 114

// VS ForEach********************
// let newNumber = 0;

// numbers.forEach((currentNumber) => {
//   newNumber += currentNumber;
// });

// Related to real life situation

// const expenses = {
//   chauffage: 100,
//   voiture: 70,
//   internet: 30,
//   food: 400,
//   hobbies: 200,
//   telephone: 30,
//   mutuelle: 20,
//   assurance: 30,
// };

// const total = Object.values(expenses);
// console.log(total); [100,70,30,400,200,30,20,30]

// total.reduce((acc, expense) => acc + expense); 880
// total.reduce((acc, expense) => acc + expense, 100); 980

// __________________________________________________________________________________

//Find - find the first item that matches from an array.
// let numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.find((number) => {
//   return number > 10;
// });

// console.log(newNumber); 56

// __________________________________________________________________________________

//FindIndex - find the index of the first item that matches.

// let numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.findIndex((number) => {
//   return number > 10;
// });

// console.log(newNumber); 1
