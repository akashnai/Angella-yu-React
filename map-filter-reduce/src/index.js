var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const double = (x)=>{
//   return x * 2;
// }

// const doubleNumbers = numbers.map(double)

// console.log(doubleNumbers)

//Filter - Create a new array by keeping the items that return true.

// const filteredNum = numbers.filter((num) => {
//   return num < 10;
// });

// console.log(filteredNum);

//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce((accumulator, currentNum) => {
//   console.log("Accumulator: " + accumulator);
//   console.log("Current value: " + currentNum);
//   return accumulator + currentNum;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

const find = numbers.find((num) => {
  return num < 10;
});

console.log(find);

//FindIndex - find the index of the first item that matches.

const findIndex = numbers.findIndex((num) => {
  return num < 10;
});

console.log(findIndex);

// challenge
// import emojipedia from "./emojipedia";

// const meaning = emojipedia.map((entry) => {
//   return entry.meaning.substring(0, 100);
// });

// console.log(meaning);
